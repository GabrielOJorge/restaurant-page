const bannerComponent = () => {
  const banner = document.createElement('main');
  const para = document.createElement('p');
  const a = document.createElement('a');

  para.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi alias at dolor illo sapiente.';
  a.textContent = 'See the menu';
  a.href = '#menu'
  banner.classList.add('main-banner');

  banner.append(para, a);

  return banner;
};

export default bannerComponent;