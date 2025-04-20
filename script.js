document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    nav.classList.toggle('active');
  });
});
