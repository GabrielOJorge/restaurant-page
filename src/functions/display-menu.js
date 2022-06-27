const displayMenu = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  
  home.style.transform = 'scale(0)';
  home.style.display = 'none';

  contact.style.transform = 'scale(0)';
  contact.style.display = 'none';

  menu.style.display = 'initial';
  menu.style.transform = 'scale(1)';
};

export default displayMenu;