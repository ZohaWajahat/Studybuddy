/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
const navLinks = document.querySelectorAll('.nav__link');

// Loop through each link and add "active" class if it matches the current URL
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});