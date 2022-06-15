const displayHome = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');

  menu.style.transform = 'scale(0)';
  home.style.transform = 'scale(1)';
};

export default displayHome;