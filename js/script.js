function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show');
  document.querySelector('.menu').classList.toggle('col-s-12');
  document.querySelector('.top').classList.toggle('col-l-12');
  document.querySelector('.top').classList.toggle('col-m-12');
  document.querySelector('.top').classList.toggle('hidden-top');
  document.querySelector('.top').classList.toggle('menu-list-hidden');
  document.querySelector('.content').classList.toggle('col-l-12');
  document.querySelector('.content').classList.toggle('col-m-12');
  document.querySelector('.menu-list').classList.toggle('show');
  document.querySelector('.photo').classList.toggle('show');
  document.querySelector('.hamburger').classList.toggle('hamburger_left');
}



document.querySelector('.hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();

});