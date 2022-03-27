const body = document.querySelector('body');
const burgerButton = document.querySelector('.burger-button');
const navMenu = document.querySelector('.header-nav');
const navMenuItem = document.querySelectorAll('.nav-link');

burgerButton.addEventListener('click', menuShowToggle);

navMenuItem.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    burgerButton.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('body-lock');
  });
});

function menuShowToggle() {
  burgerButton.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('body-lock');
}
