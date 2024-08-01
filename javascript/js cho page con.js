// Tạo hiệu ứng chuyển động cho các phần tử trong các trang page con

ScrollReveal().reveal('.main p', {
    duration: 500, // Thời gian hiệu ứng (ms)
    origin: 'left', // Xuất hiện từ phía dưới
    distance: '100px', // Khoảng cách di chuyển
    easing: 'ease-in-out', // Đường cong chuyển động
    reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
});

ScrollReveal().reveal('.main h3', {
    duration: 500, // Thời gian hiệu ứng (ms)
    origin: 'top', // Xuất hiện từ phía dưới
    distance: '100px', // Khoảng cách di chuyển
    easing: 'ease-in-out', // Đường cong chuyển động
    reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
});

ScrollReveal().reveal('.main img', {
    duration: 500, // Thời gian hiệu ứng (ms)
    origin: 'left', // Xuất hiện từ phía dưới
    distance: '100px', // Khoảng cách di chuyển
    easing: 'ease-in-out', // Đường cong chuyển động
    reset: true // Tái kích hoạt hiệu ứng khi cuộn lại
});



