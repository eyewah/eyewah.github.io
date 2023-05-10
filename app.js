// Получить модальное окно
const modal = document.getElementById("order-modal");

// Получить кнопку, которая открывает модальное окно
const btn = document.querySelector(".btn");

// Получить элемент <span>, который закрывает модальное окно
const span = document.getElementsByClassName("close")[0];

// Открывать модальное окно при клике на кнопку
btn.onclick = function() {
  modal.style.display = "block";
}

// Закрывать модальное окно при клике на элемент <span>
span.onclick = function() {
  modal.style.display = "none";
}

// Закрывать модальное окно при клике вне его области
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}