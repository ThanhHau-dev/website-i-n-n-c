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


// Lấy phần tử .header_2 .container .row
const header2 = document.querySelector('.header_2 .container .row');

// Lấy tất cả các phần tử .col-md-6 trong .row
const colmd6 = header2.querySelectorAll('.col-md-6');

// Kiểm tra nếu có phần tử .col-md-6
if (colmd6.length > 0) {
    // Lấy phần tử .col-md-6 cuối cùng
    const lastColMd6 = colmd6[colmd6.length - 1];

    // Tạo thẻ h3 mới
    const newH3 = document.createElement('h3');
    newH3.textContent = 'DỊCH VỤ SỬA CHỮA - LẮP ĐẶT ĐIỆN NƯỚC TẠI NHÀ';
    newH3.style.fontWeight = 'bold';

    // Thêm thẻ h3 vào sau phần tử .col-md-6 cuối cùng
    lastColMd6.after(newH3);
}

/*
document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử .row
    const rowElement = document.querySelector('.header_2 .container .row');

    // Tạo thẻ H3 mới
    const newH3 = document.createElement('h3');
    newH3.textContent = 'Dịch vụ nhanh chóng và chuyên nghiệp';

    // Thêm thẻ H3 vào trong .row
    rowElement.appendChild(newH3);

    newH3.style.fontWeight = 'bold';
});


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
