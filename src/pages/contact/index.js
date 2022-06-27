const contactPage = () => {
  const containerDiv = document.createElement('div');
  const infoDiv = document.createElement('div');

  const locationDiv = document.createElement('div');
  const locationIcon = document.createElement('i');
  const locationP = document.createElement('p');

  const phoneDiv = document.createElement('div');
  const phoneIcon = document.createElement('i');
  const phoneP = document.createElement('p');

  const emailDiv = document.createElement('div');
  const emailIcon = document.createElement('i');
  const emailP = document.createElement('p');

  locationIcon.className = 'fa-solid fa-location-dot';
  locationP.textContent = '123, Fake Street | Lyon, FR';
  locationDiv.append(locationIcon, locationP);

  phoneIcon.className = 'fa-solid fa-phone';
  phoneP.textContent = '206-555-7890';
  phoneDiv.append(phoneIcon, phoneP);

  emailIcon.className = 'fa-solid fa-envelope';
  emailP.textContent = 'saintlouisix@protonmail.com';
  emailDiv.append(emailIcon, emailP);

  infoDiv.append(locationDiv, phoneDiv, emailDiv);

  containerDiv.id = 'contact';
  containerDiv.append(infoDiv);

  return containerDiv;
};

export default contactPage;