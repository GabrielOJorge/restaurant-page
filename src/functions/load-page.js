import headerComponent from "../components/header/header";

const loadPage = () => {
  document.getElementById('content').append(headerComponent());
};

export default loadPage;