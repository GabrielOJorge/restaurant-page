import displayMenu from "../../functions/display-menu";

const homePage = () => {
  const home = document.createElement('div');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const a = document.createElement('a');
  
  para1.textContent = '123, Fake Street | Lyon, FR | 206-555-7890';
  para2.textContent = 'Un bon repas doit commencer par la faim';

  a.textContent = 'See the menu';
  a.href = '#menu';

  a.addEventListener('click', displayMenu);

  home.id = 'home';
  home.append(para1, para2, a);

  return home;
}

export default homePage;