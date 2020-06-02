(function () {
  /* Dropdown handlers */
  const menuItems = Object.values(document.querySelectorAll('.menu__item'));
  const submenuItems = Object.values(document.querySelectorAll('.submenu__item'));

  const menuItemHandler = e => {
    e.stopPropagation();
    const isActive = e.target.classList.contains('active');
    menuItems.forEach(item => item.classList.remove('active'));
    e.target.classList.toggle('active', !isActive);
  };

  const submenuItemHandler = e => {
    e.stopPropagation();
    const isActive = e.target.classList.contains('active');
    submenuItems.forEach(item => item.classList.remove('active'));
    e.target.classList.toggle('active', !isActive);
  };

  menuItems.forEach((list) => list.addEventListener('click', menuItemHandler));
  submenuItems.forEach((list) => list.addEventListener('click', submenuItemHandler));



  /* Mobile menu handlers */
  const burger = document.getElementById('burger');
  const mobSide = document.getElementById('mobile-sidemenu');
  const mobSideClose = document.getElementById('mobile-sidemenu-close');
  const mobSideHandler = () => {
    const isActive = mobSide.classList.contains('active');
    mobSide.classList.toggle('active', !isActive);
  }
  if(burger !== null) {
    burger.addEventListener('touchend', mobSideHandler);
    burger.addEventListener('click', mobSideHandler);
    mobSideClose.addEventListener('touchend', mobSideHandler);
    mobSideClose.addEventListener('click', mobSideHandler);
  }
})();
