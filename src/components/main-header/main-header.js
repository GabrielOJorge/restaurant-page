const headerComponent = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');

  header.classList.add('main-header');

  h1.textContent = 'Restaurant';

  a1.textContent = 'Home';
  a2.textContent = 'Menu';
  a3.textContent = 'Contact';

  a1.href = '#home';
  a2.href = '#menu';
  a3.href = '#contact';

  li1.append(a1);
  li2.append(a2);
  li3.append(a3);

  ul.append(li1, li2, li3);
  header.append(h1, ul);

  return header;
};

export default headerComponent;