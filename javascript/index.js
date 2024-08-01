// thay đổi tạm thời toàn bộ ảnh trong page

function img_thay_doi() {
    var a = document.querySelectorAll(".card-img-top");
    a.forEach((img, index) => {
        img.src = "https://png.pngtree.com/png-vector/20240125/ourlarge/pngtree-man-electrician-is-engaged-in-repair-electrical-appliances-by-opening-electrical-png-image_11489356.png"
    })
}

img_thay_doi();



// tạo hiệu ứng dãn ra cho header menu

// let lastScrollTop = 0;
// const menu = document.querySelector('.header_1');

// window.addEventListener('scroll', function() {
//     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     if (currentScroll > lastScrollTop) {
//         // Cuộn xuống
//         menu.classList.remove('expanded');

//     } else {
//         // Cuộn lên
//         menu.classList.add('expanded');

//     }

//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Đảm bảo không bị giá trị âm
// });

/*
// tạo hiệu ứng cho các class row khi vuốt bằng thư viện AOS

// Sử dụng js dom để thêm các class hiệu ứng từ thư viện AOS vô toàn bộ thẻ div class row
// các class row chuyển động từ dưới đi lên
document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        row.setAttribute('data-aos', 'fade-up');
    });

    // Khởi tạo AOS
    AOS.init({
        duration: 600, // Thời gian hiệu ứng (ms)
        easing: 'ease-in-out', // Đường cong chuyển động
    });
});

// chuyển động cho thẻ card 

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.card-img-top');

    rows.forEach(row => {
        row.setAttribute('data-aos', 'fade-up-right');
    });

    // Khởi tạo AOS
    AOS.init({
        duration: 600, // Thời gian hiệu ứng (ms)
        easing: 'ease-in-out', // Đường cong chuyển động
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.card-img-top');

    rows.forEach(row => {
        row.setAttribute('data-aos', 'zoom-in');
    });

    // Khởi tạo AOS
    AOS.init({
        duration: 600, // Thời gian hiệu ứng (ms)
        easing: 'ease-in-out', // Đường cong chuyển động
    });
});



// Chuyển động cho card-text

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.card-text');

    rows.forEach(row => {
        row.setAttribute('data-aos', 'fade-left');
    });

    // Khởi tạo AOS
    AOS.init({
        duration: 600, // Thời gian hiệu ứng (ms)
        easing: 'ease-in-out', // Đường cong chuyển động
    });
});
*/



// Tạo hiệu ứng bằng thư viện ScrollReveal

    // Hiệu ứng cho class row
    ScrollReveal().reveal('.main .row', {
        duration: 500, // Thời gian hiệu ứng (ms)
        origin: 'bottom', // Xuất hiện từ phía dưới
        distance: '100px', // Khoảng cách di chuyển
        easing: 'ease-in-out', // Đường cong chuyển động
        reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
    });

    // Hiệu ứng cho class card-img-top
    ScrollReveal().reveal('.card-img-top', {
        duration: 500, // Thời gian hiệu ứng (ms)
        origin: 'right', // Xuất hiện từ phía dưới
        distance: '120px', // Khoảng cách di chuyển
        easing: 'ease-in-out', // Đường cong chuyển động
        reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
    });

    // Hiệu ứng cho class card-text
    ScrollReveal().reveal('.card-text', {
        duration: 500, // Thời gian hiệu ứng (ms)
        origin: 'left', // Xuất hiện từ phía dưới
        distance: '100px', // Khoảng cách di chuyển
        easing: 'ease-in-out', // Đường cong chuyển động
        reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
    });

    // Hiệu ứng cho header
    ScrollReveal().reveal('.header_1', {
        duration: 500, // Thời gian hiệu ứng (ms)
        origin: 'left', // Xuất hiện từ phía dưới
        distance: '100px', // Khoảng cách di chuyển
        easing: 'ease-in-out', // Đường cong chuyển động
        reset: false // Tái kích hoạt hiệu ứng khi cuộn lại
    });

