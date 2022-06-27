import menuPage from "../../pages/menu";
import homePage from "../../pages/home";
import contactPage from "../../pages/contact";

const bannerComponent = () => {
  const banner = document.createElement('main');
  banner.classList.add('main-banner');
  banner.append(homePage(), menuPage(), contactPage());

  return banner;
};

export default bannerComponent;