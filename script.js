// 배경색 변경 버튼 클릭 시
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "배경색 변경";
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        document.body.style.backgroundColor = "#e0f7fa";
    });
});