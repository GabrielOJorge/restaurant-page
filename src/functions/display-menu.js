const displayMenu = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');

  home.style.transform = 'scale(0)';
  menu.style.transform = 'scale(1)';
};

export default displayMenu;