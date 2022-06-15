const menuPage = () => {
  const containerDiv = document.createElement('div');

  const cafeSection = document.createElement('section');
  const cafeSectionH2 = document.createElement('h2');
  const cafeSectionDiv = document.createElement('div');

  const espressoDiv = document.createElement('div');
  const capuccinoDiv = document.createElement('div');
  const macchiatoDiv = document.createElement('div');
  const latteDiv = document.createElement('div');
  const mochaDiv = document.createElement('div');
  const affogatoDiv = document.createElement('div');

  const espressoH3 = document.createElement('h3');
  const capuccinoH3 = document.createElement('h3');
  const macchiatoH3 = document.createElement('h3');
  const latteH3 = document.createElement('h3');
  const mochaH3 = document.createElement('h3');
  const affogatoH3 = document.createElement('h3');

  const espressoP = document.createElement('p');
  const capuccinoP = document.createElement('p');
  const macchiatoP = document.createElement('p');
  const latteP = document.createElement('p');
  const mochaP = document.createElement('p');
  const affogatoP = document.createElement('p');

  cafeSectionH2.textContent = 'Café';

  espressoH3.textContent = 'Espresso';
  capuccinoH3.textContent = 'Capuccino';
  macchiatoH3.textContent = 'Macchiato';
  latteH3.textContent = 'Latte';
  mochaH3.textContent = 'Mocha';
  affogatoH3.textContent = 'Affogato';

  espressoP.textContent = 'Espresso is a coffee-brewing method in which a small amount of nearly boiling water is forced under bars of atmospheric pressure through finely-ground coffee beans.'; 
  capuccinoP.textContent = 'A cappuccino is an espresso-based coffee drink that originated in Austria with later development taking place in Italy, and is prepared with steamed milk foam.';
  macchiatoP.textContent = 'Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed.';
  latteP.textContent = 'Caffè latte, often shortened to just latte in English, is a coffee beverage of Italian origin made with espresso and steamed milk.';
  mochaP.textContent = 'A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a café latte commonly served in a glass rather than a mug.';
  affogatoP.textContent = 'An affogato or more traditionally known as "affogato al caffe" (Italian for "drowned in coffee") is an Italian coffee-based dessert.';

  espressoDiv.append(espressoH3, espressoP);
  capuccinoDiv.append(capuccinoH3, capuccinoP);
  macchiatoDiv.append(macchiatoH3, macchiatoP);
  latteDiv.append(latteH3, latteP);
  mochaDiv.append(mochaH3, mochaP);
  affogatoDiv.append(affogatoH3, affogatoP);

  cafeSectionDiv.append(espressoDiv, capuccinoDiv, macchiatoDiv, latteDiv, mochaDiv, affogatoDiv);

  cafeSection.classList.add('cafe-section');
  cafeSection.append(cafeSectionH2, cafeSectionDiv);

  containerDiv.id = 'menu';
  containerDiv.append(cafeSection);

  return containerDiv;
};

export default menuPage;