

// Menu toggle functionality for smaller screens
const menuIcon = document.getElementById('menu-icon');
const navLinksFirst = document.getElementById('nav-links-first');
const navItemsFirst = document.querySelectorAll('.nav-links-first a');

// Toggle menu open/close on clicking the menu icon
menuIcon.addEventListener('click', () => {
  navLinksFirst.classList.toggle('open');
});

// Close menu when a nav item is clicked
navItemsFirst.forEach(item => {
  item.addEventListener('click', () => {
    navLinksFirst.classList.remove('open');
  });
});
