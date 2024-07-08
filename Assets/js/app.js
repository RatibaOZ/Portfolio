document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
  
    burgerMenu.addEventListener('click', function(event) {
      event.stopPropagation(); 
      navUl.classList.toggle('show');
    });
  
    document.addEventListener('click', function(event) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickInsideBurgerMenu = burgerMenu.contains(event.target);
  
      if (!isClickInsideNav && !isClickInsideBurgerMenu) {
        navUl.classList.remove('show');
      }
    });
  
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navUl.classList.remove('show');
      }
    });
  });
  