const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

function openNavMenu() {
  navMenu.classList.add('show');
}

function closeNavMenu() {
  navMenu.classList.remove('show');
}
toggleMenu.addEventListener('click', () => {
  openNavMenu();
});

closeMenu.addEventListener('click', () => {
  closeNavMenu();
});
// Додайте обробник натискання клавіші "Esc"
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navMenu.classList.contains('show')) {
    closeNavMenu();
  }
});

// header scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});
