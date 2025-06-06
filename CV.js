// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const gradientBtn = document.querySelector('.gradient-btn');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
  gradientBtn.classList.toggle('hidden');
});

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
    gradientBtn.classList.remove('hidden');
  });
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
  gradientBtn.classList.remove('hidden');
});