

// Tạo hiệu ứng bằng thư viện ScrollReveal

    // Hiệu ứng cho class row
    document.addEventListener("DOMContentLoaded", function() {
        ScrollReveal().reveal('.main .row', {
            duration: 500, // Thời gian hiệu ứng (ms)
            origin: 'bottom', // Xuất hiện từ phía dưới
            distance: '120px', // Khoảng cách di chuyển
            easing: 'ease-in-out', // Đường cong chuyển động
            reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
        });
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

    // Hiệu ứng cho phần giới thiệu class header_2_1
        ScrollReveal().reveal('.header_2_1 img', {
        duration: 500, // Thời gian hiệu ứng (ms)
        origin: 'top', // Xuất hiện từ phía dưới
        distance: '200px', // Khoảng cách di chuyển
        easing: 'ease-in-out', // Đường cong chuyển động
        reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
    });

    ScrollReveal().reveal('.header_2 h2', {
        duration: 600, // Thời gian hiệu ứng (ms)
        origin: 'bottom', // Xuất hiện từ phía dưới
        distance: '200px', // Khoảng cách di chuyển
        easing: 'ease-in-out', // Đường cong chuyển động
        reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
    });


/*------------------------------------------------------------------------------- */

// Nút gọi điện thoại

function makeCall() {
    // Lấy liên kết gọi điện thoại
    var callLink = document.getElementById('callLink');
    
    // Gán URL với số điện thoại mong muốn
    callLink.href = 'tel:+84837857277';
    
    // Kích hoạt sự kiện nhấp vào liên kết
    callLink.click();
};


/*------------------------------------------------------------------------------ */
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
  
  

