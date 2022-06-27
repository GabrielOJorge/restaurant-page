/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/main-banner/main-banner.js":
/*!***************************************************!*\
  !*** ./src/components/main-banner/main-banner.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/menu */ \"./src/pages/menu/index.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/home */ \"./src/pages/home/index.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/contact */ \"./src/pages/contact/index.js\");\n\n\n\n\nconst bannerComponent = () => {\n  const banner = document.createElement('main');\n  banner.classList.add('main-banner');\n  banner.append((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_pages_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n  return banner;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerComponent);\n\n//# sourceURL=webpack://restaurant-page/./src/components/main-banner/main-banner.js?");

/***/ }),

/***/ "./src/components/main-footer/main-footer.js":
/*!***************************************************!*\
  !*** ./src/components/main-footer/main-footer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footerComponent = () => {\n  const footer = document.createElement('footer');\n  const a = document.createElement('a');\n  const i = document.createElement('i');\n  const h3 = document.createElement('h3');\n\n  i.className = 'fab fa-github';\n\n  a.href = 'https://github.com/GabrielOJorge';\n  a.target = '_blank';\n  a.append(i);\n\n  h3.textContent = '© Gabriel O. Jorge';\n\n  footer.classList.add('main-footer');\n  footer.append(a, h3);\n\n  return footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerComponent);\n\n//# sourceURL=webpack://restaurant-page/./src/components/main-footer/main-footer.js?");

/***/ }),

/***/ "./src/components/main-header/main-header.js":
/*!***************************************************!*\
  !*** ./src/components/main-header/main-header.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_display_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/display-menu */ \"./src/functions/display-menu.js\");\n/* harmony import */ var _functions_display_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/display-home */ \"./src/functions/display-home.js\");\n/* harmony import */ var _functions_display_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/display-contact */ \"./src/functions/display-contact.js\");\n\n\n\n\nconst headerComponent = () => {\n  const header = document.createElement('header');\n  const h1 = document.createElement('h1');\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n  const li1 = document.createElement('li');\n  const li2 = document.createElement('li');\n  const li3 = document.createElement('li');\n  const a1 = document.createElement('a');\n  const a2 = document.createElement('a');\n  const a3 = document.createElement('a');\n\n  header.classList.add('main-header');\n\n  h1.textContent = 'Saint Louis';\n\n  a1.textContent = 'Home';\n  a2.textContent = 'Menu';\n  a3.textContent = 'Contact';\n\n  a1.href = '#home';\n  a2.href = '#menu';\n  a3.href = '#contact';\n\n  a1.addEventListener('click', _functions_display_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  a2.addEventListener('click', _functions_display_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  a3.addEventListener('click', _functions_display_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  li1.append(a1);\n  li2.append(a2);\n  li3.append(a3);\n\n  ul.append(li1, li2, li3);\n  nav.append(ul);\n  header.append(h1, nav);\n\n  return header;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerComponent);\n\n//# sourceURL=webpack://restaurant-page/./src/components/main-header/main-header.js?");

/***/ }),

/***/ "./src/functions/display-contact.js":
/*!******************************************!*\
  !*** ./src/functions/display-contact.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayContact = () => {\n  const home = document.getElementById('home');\n  const menu = document.getElementById('menu');\n  const contact = document.getElementById('contact');\n\n  home.style.transform = 'scale(0)';\n  home.style.display = 'none';\n\n  menu.style.transform = 'scale(0)';\n  menu.style.display = 'none';\n\n  contact.style.display = 'flex';\n  contact.style.transform = 'scale(1)';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);\n\n//# sourceURL=webpack://restaurant-page/./src/functions/display-contact.js?");

/***/ }),

/***/ "./src/functions/display-home.js":
/*!***************************************!*\
  !*** ./src/functions/display-home.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayHome = () => {\n  const home = document.getElementById('home');\n  const menu = document.getElementById('menu');\n  const contact = document.getElementById('contact');\n\n  menu.style.transform = 'scale(0)';\n  menu.style.display = 'none';\n  \n  contact.style.transform = 'scale(0)';\n  contact.style.display = 'none';\n\n  home.style.display = 'flex';\n  home.style.transform = 'scale(1)';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n//# sourceURL=webpack://restaurant-page/./src/functions/display-home.js?");

/***/ }),

/***/ "./src/functions/display-menu.js":
/*!***************************************!*\
  !*** ./src/functions/display-menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayMenu = () => {\n  const home = document.getElementById('home');\n  const menu = document.getElementById('menu');\n  const contact = document.getElementById('contact');\n  \n  home.style.transform = 'scale(0)';\n  home.style.display = 'none';\n\n  contact.style.transform = 'scale(0)';\n  contact.style.display = 'none';\n\n  menu.style.display = 'initial';\n  menu.style.transform = 'scale(1)';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/functions/display-menu.js?");

/***/ }),

/***/ "./src/functions/load-page.js":
/*!************************************!*\
  !*** ./src/functions/load-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_main_header_main_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main-header/main-header */ \"./src/components/main-header/main-header.js\");\n/* harmony import */ var _components_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main-banner/main-banner */ \"./src/components/main-banner/main-banner.js\");\n/* harmony import */ var _components_main_footer_main_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main-footer/main-footer */ \"./src/components/main-footer/main-footer.js\");\n\n\n\n\nconst loadPage = () => {\n  document.getElementById('content').append((0,_components_main_header_main_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), (0,_components_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_components_main_footer_main_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/functions/load-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/load-page */ \"./src/functions/load-page.js\");\n\n\n(0,_functions_load_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact/index.js":
/*!************************************!*\
  !*** ./src/pages/contact/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactPage = () => {\n  const containerDiv = document.createElement('div');\n  const infoDiv = document.createElement('div');\n\n  const locationDiv = document.createElement('div');\n  const locationIcon = document.createElement('i');\n  const locationP = document.createElement('p');\n\n  const phoneDiv = document.createElement('div');\n  const phoneIcon = document.createElement('i');\n  const phoneP = document.createElement('p');\n\n  const emailDiv = document.createElement('div');\n  const emailIcon = document.createElement('i');\n  const emailP = document.createElement('p');\n\n  locationIcon.className = 'fa-solid fa-location-dot';\n  locationP.textContent = '123, Fake Street | Lyon, FR';\n  locationDiv.append(locationIcon, locationP);\n\n  phoneIcon.className = 'fa-solid fa-phone';\n  phoneP.textContent = '206-555-7890';\n  phoneDiv.append(phoneIcon, phoneP);\n\n  emailIcon.className = 'fa-solid fa-envelope';\n  emailP.textContent = 'saintlouisix@protonmail.com';\n  emailDiv.append(emailIcon, emailP);\n\n  infoDiv.append(locationDiv, phoneDiv, emailDiv);\n\n  containerDiv.id = 'contact';\n  containerDiv.append(infoDiv);\n\n  return containerDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact/index.js?");

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_display_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/display-menu */ \"./src/functions/display-menu.js\");\n\n\nconst homePage = () => {\n  const home = document.createElement('div');\n  const para1 = document.createElement('p');\n  const para2 = document.createElement('p');\n  const a = document.createElement('a');\n  \n  para1.textContent = '123, Fake Street | Lyon, FR | 206-555-7890';\n  para2.textContent = 'Un bon repas doit commencer par la faim';\n\n  a.textContent = 'See the menu';\n  a.href = '#menu';\n\n  a.addEventListener('click', _functions_display_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n  home.id = 'home';\n  home.append(para1, para2, a);\n\n  return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home/index.js?");

/***/ }),

/***/ "./src/pages/menu/index.js":
/*!*********************************!*\
  !*** ./src/pages/menu/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPage = () => {\n  const containerDiv = document.createElement('div');\n\n  const cafeSection = document.createElement('section');\n  const cafeSectionH2 = document.createElement('h2');\n  const cafeSectionDiv = document.createElement('div');\n\n  const espressoDiv = document.createElement('div');\n  const capuccinoDiv = document.createElement('div');\n  const macchiatoDiv = document.createElement('div');\n  const latteDiv = document.createElement('div');\n  const mochaDiv = document.createElement('div');\n  const affogatoDiv = document.createElement('div');\n\n  const espressoH3 = document.createElement('h3');\n  const capuccinoH3 = document.createElement('h3');\n  const macchiatoH3 = document.createElement('h3');\n  const latteH3 = document.createElement('h3');\n  const mochaH3 = document.createElement('h3');\n  const affogatoH3 = document.createElement('h3');\n\n  const espressoP = document.createElement('p');\n  const capuccinoP = document.createElement('p');\n  const macchiatoP = document.createElement('p');\n  const latteP = document.createElement('p');\n  const mochaP = document.createElement('p');\n  const affogatoP = document.createElement('p');\n\n  cafeSectionH2.textContent = 'Café';\n\n  espressoH3.textContent = 'Espresso';\n  capuccinoH3.textContent = 'Capuccino';\n  macchiatoH3.textContent = 'Macchiato';\n  latteH3.textContent = 'Latte';\n  mochaH3.textContent = 'Mocha';\n  affogatoH3.textContent = 'Affogato';\n\n  espressoP.textContent = 'Espresso is a coffee-brewing method in which a small amount of nearly boiling water is forced under bars of atmospheric pressure through finely-ground coffee beans.'; \n  capuccinoP.textContent = 'A cappuccino is an espresso-based coffee drink that originated in Austria with later development taking place in Italy, and is prepared with steamed milk foam.';\n  macchiatoP.textContent = 'Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed.';\n  latteP.textContent = 'Caffè latte, often shortened to just latte in English, is a coffee beverage of Italian origin made with espresso and steamed milk.';\n  mochaP.textContent = 'A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a café latte commonly served in a glass rather than a mug.';\n  affogatoP.textContent = 'An affogato or more traditionally known as \"affogato al caffe\" (Italian for \"drowned in coffee\") is an Italian coffee-based dessert.';\n\n  espressoDiv.append(espressoH3, espressoP);\n  capuccinoDiv.append(capuccinoH3, capuccinoP);\n  macchiatoDiv.append(macchiatoH3, macchiatoP);\n  latteDiv.append(latteH3, latteP);\n  mochaDiv.append(mochaH3, mochaP);\n  affogatoDiv.append(affogatoH3, affogatoP);\n\n  cafeSectionDiv.append(espressoDiv, capuccinoDiv, macchiatoDiv, latteDiv, mochaDiv, affogatoDiv);\n\n  cafeSection.classList.add('cafe-section');\n  cafeSection.append(cafeSectionH2, cafeSectionDiv);\n\n  containerDiv.id = 'menu';\n  containerDiv.append(cafeSection);\n\n  return containerDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;