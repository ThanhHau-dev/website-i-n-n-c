
function loadHTML(elementId, fileName) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Không tìm thấy phần tử với ID: ${elementId}`);
    return;
  }

  fetch(fileName)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      element.innerHTML = data;
    })
    .catch((error) => console.error("Lỗi khi tải file:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header", "header.html");
  loadHTML("footer", "footer.html");
});
