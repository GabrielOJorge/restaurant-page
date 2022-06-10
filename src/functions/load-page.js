import headerComponent from "../components/main-header/main-header";
import bannerComponent from "../components/main-banner/main-banner";

const loadPage = () => {
  document.getElementById('content').append(headerComponent(), bannerComponent());
};

export default loadPage;