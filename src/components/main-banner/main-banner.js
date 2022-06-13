const bannerComponent = () => {
  const banner = document.createElement('main');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const a = document.createElement('a');
  
  para1.textContent = '123, Fake Street | Seattle, WA | 206-555-7890';
  para2.textContent = 'Un bon repas doit commencer par la faim';

  a.textContent = 'See the menu';
  a.href = '#menu';

  banner.classList.add('main-banner');

  banner.append(para1, para2, a);

  return banner;
};

export default bannerComponent;