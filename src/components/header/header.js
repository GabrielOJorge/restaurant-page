const headerComponent = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const div = document.createElement('div');
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

  div.append(a1, a2, a3);
  header.append(h1, div);

  return header;
};

export default headerComponent;