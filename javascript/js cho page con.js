// đổi chữ 
     // JavaScript để thay thế chữ
     document.addEventListener("DOMContentLoaded", function() {
      // Lấy toàn bộ nội dung văn bản của body
      const bodyText = document.body.innerHTML;

      // Thay thế tất cả chữ 'fisthome' bằng 'Tuấn Đạt'
      const newText = bodyText.replace(/Fisthome/g, 'Tuấn Đạt');

      // Gán nội dung mới cho body
      document.body.innerHTML = newText;
  });



/*-------------------------------------------------------------------------------------- */
// Thêm chữ cho header
  // Lấy thẻ h3 đầu tiên trong class header_1_menu
  const h3Element = document.querySelector('.header_1_menu h3');

  // Kiểm tra xem thẻ h3 có tồn tại không
  if (h3Element) {
      // Thay đổi nội dung của thẻ h3
      h3Element.textContent = 'dịch vụ sửa chữa - lắp đặt điện nước tại nhà';
  }


// Thêm chữ cho phần header_2
const header2 = document.querySelector('.header_2 .col-md-6');

// Lấy tất cả các thẻ h2 trong phần tử này
const h2Elements = header2.querySelectorAll('h2');

// Tạo thẻ h3 mới
const newH3 = document.createElement('h3');
newH3.textContent = 'DỊCH VỤ SỬA CHỮA- LẮP ĐẶT ĐIỆN NƯỚC TẠI NHÀ';

// Thêm thẻ h3 vào sau thẻ h2 cuối cùng
if (h2Elements.length > 0) {
    header2.appendChild(newH3);
}

newH3.style.fontWeight = 'bold';


/*------------------------------------------------------------------------------------- */
// Nút gọi điện thoại

function makeCall() {
    // Lấy liên kết gọi điện thoại
    var callLink = document.getElementById('callLink');
    
    // Gán URL với số điện thoại mong muốn
    callLink.href = 'tel:+84837857277';
    
    // Kích hoạt sự kiện nhấp vào liên kết
    callLink.click();
};


/*--------------------------------------------------------------------------------- */

// Tạo hiệu ứng chuyển động cho các phần tử trong các trang page con


// Tạo hiệu ứng bằng thư viện ScrollReveal
/*
    // Hiệu ứng cho class row
    ScrollReveal().reveal('.main .row', {
      duration: 500, // Thời gian hiệu ứng (ms)
      origin: 'bottom', // Xuất hiện từ phía dưới
      distance: '120px', // Khoảng cách di chuyển
      easing: 'ease-in-out', // Đường cong chuyển động
      reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
  });

  // Hiệu ứng cho class card-img-top
  ScrollReveal().reveal('.card-img-top', {
      duration: 500, // Thời gian hiệu ứng (ms)
      origin: 'right', // Xuất hiện từ phía dưới
      distance: '30px', // Khoảng cách di chuyển
      easing: 'ease-in-out', // Đường cong chuyển động
      reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
  });

  // Hiệu ứng cho class card-text
  ScrollReveal().reveal('.card-text', {
      duration: 500, // Thời gian hiệu ứng (ms)
      origin: 'left', // Xuất hiện từ phía dưới
      distance: '30px', // Khoảng cách di chuyển
      easing: 'ease-in-out', // Đường cong chuyển động
      reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
  });

  // Hiệu ứng cho header
  ScrollReveal().reveal('.header_1', {
      duration: 500, // Thời gian hiệu ứng (ms)
      origin: 'left', // Xuất hiện từ phía dưới
      distance: '1px', // Khoảng cách di chuyển
      easing: 'ease-in-out', // Đường cong chuyển động
      reset: false // Tái kích hoạt hiệu ứng khi cuộn lại
  });
*/
/*----------------------------------------------------------------------- */
