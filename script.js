// script.js – shared across pages

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out',
    offset: 50
  });

  // Navbar scroll effect: transparent -> solid
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    // trigger on load in case page is scrolled
    if (window.scrollY > 50) navbar.classList.add('scrolled');
  }

  // Optional: smooth button hover consistency (handled via CSS)
  console.log('✨ Lumière — premium restaurant experience');
});