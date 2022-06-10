import headerComponent from "../components/main-header/main-header";
import bannerComponent from "../components/main-banner/main-banner";
import footerComponent from "../components/main-footer/main-footer";

const loadPage = () => {
  document.getElementById('content').append(headerComponent(), bannerComponent(), footerComponent());
};

export default loadPage;