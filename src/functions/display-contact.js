const displayContact = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  home.style.transform = 'scale(0)';
  home.style.display = 'none';

  menu.style.transform = 'scale(0)';
  menu.style.display = 'none';

  contact.style.display = 'flex';
  contact.style.transform = 'scale(1)';
};

export default displayContact;