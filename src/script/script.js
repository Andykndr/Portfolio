const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu_close'),
  menuLinks = document.querySelectorAll('.menu_link');

hamburger.addEventListener('click', () => {
  menu.classList.add('menu_active');
});
closeElem.addEventListener('click', () => {
  menu.classList.remove('menu_active');
});

menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('menu_active');
  });
});

const counter = document.querySelectorAll('.skills_counter'),
  lines = document.querySelectorAll('.skills_line span');

counter.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
