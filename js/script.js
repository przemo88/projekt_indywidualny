function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible);
  document.querySelector('.top').classList.toggle('col-l-12');
  document.querySelector('.content').classList.toggle('col-l-12');

}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();

});