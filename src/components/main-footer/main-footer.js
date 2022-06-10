const footerComponent = () => {
  const footer = document.createElement('footer');
  const a = document.createElement('a');
  const i = document.createElement('i');
  const h3 = document.createElement('h3');

  i.className = 'fab fa-github';

  a.href = 'https://github.com/GabrielOJorge';
  a.target = '_blank';
  a.append(i);

  h3.textContent = '© Gabriel O. Jorge';

  footer.append(a, h3);

  return footer;
};

export default footerComponent;