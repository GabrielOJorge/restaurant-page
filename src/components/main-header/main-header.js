import displayMenu from '../../functions/display-menu';
import displayHome from '../../functions/display-home';
import displayContact from '../../functions/display-contact';

const headerComponent = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');

  header.classList.add('main-header');

  h1.textContent = 'Saint Louis';

  a1.textContent = 'Home';
  a2.textContent = 'Menu';
  a3.textContent = 'Contact';

  a1.href = '#home';
  a2.href = '#menu';
  a3.href = '#contact';

  a1.addEventListener('click', displayHome);
  a2.addEventListener('click', displayMenu);
  a3.addEventListener('click', displayContact);

  li1.append(a1);
  li2.append(a2);
  li3.append(a3);

  ul.append(li1, li2, li3);
  nav.append(ul);
  header.append(h1, nav);

  return header;
};

export default headerComponent;