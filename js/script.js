

document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-list').classList.toggle('active');
});


const Dark = document.getElementById("switch-shadow")

function aplicarTema(isDark) {
  document.querySelector("header").classList.toggle("dark-header", isDark)
  document.querySelector("body").classList.toggle("dark-body", isDark)
  document.querySelectorAll("section").forEach(section => {section.classList.toggle("section-dark", isDark)});
  document.querySelectorAll(".btn").forEach(btn => {btn.classList.toggle("btn-dark", isDark)});
  document.querySelectorAll("input").forEach(input => {input.classList.toggle("input-dark", isDark)});
  document.querySelectorAll("textarea").forEach(input => {input.classList.toggle("input-dark", isDark)});
  document.querySelectorAll(".swiper-slide").forEach(swiper => {swiper.classList.toggle("swiper-slide-dark", isDark)});

  localStorage.setItem("theme", isDark ? "Dark" : "Light")
}

function trocarTema() {
  aplicarTema(Dark.checked);
}

Dark.addEventListener("change", trocarTema)

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
      alert("Mensagem enviada com sucesso!");
  });

  const Tema = localStorage.getItem("theme") === "Dark";
  Dark.checked = Tema;
  aplicarTema(Tema);
});