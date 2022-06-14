import menuPage from "../../pages/menu";
import homePage from "../../pages/home";

const bannerComponent = () => {
  const banner = document.createElement('main');
  banner.classList.add('main-banner');
  banner.append(homePage(), menuPage());

  return banner;
};

export default bannerComponent;