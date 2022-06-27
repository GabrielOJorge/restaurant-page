const displayHome = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  menu.style.transform = 'scale(0)';
  menu.style.display = 'none';
  
  contact.style.transform = 'scale(0)';
  contact.style.display = 'none';

  home.style.display = 'flex';
  home.style.transform = 'scale(1)';
};

export default displayHome;