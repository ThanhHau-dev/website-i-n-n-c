
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


/*---------------------------------------------------------------- */

