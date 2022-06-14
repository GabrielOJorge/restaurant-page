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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst bannerComponent = () => {\n  const banner = document.createElement('main');\n  const para1 = document.createElement('p');\n  const para2 = document.createElement('p');\n  const a = document.createElement('a');\n  \n  para1.textContent = '123, Fake Street | Lyon, FR | 206-555-7890';\n  para2.textContent = 'Un bon repas doit commencer par la faim';\n\n  a.textContent = 'See the menu';\n  a.href = '#menu';\n\n  banner.classList.add('main-banner');\n\n  banner.append(para1, para2, a);\n\n  return banner;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerComponent);\n\n//# sourceURL=webpack://restaurant-page/./src/components/main-banner/main-banner.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerComponent = () => {\n  const header = document.createElement('header');\n  const h1 = document.createElement('h1');\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n  const li1 = document.createElement('li');\n  const li2 = document.createElement('li');\n  const li3 = document.createElement('li');\n  const a1 = document.createElement('a');\n  const a2 = document.createElement('a');\n  const a3 = document.createElement('a');\n\n  header.classList.add('main-header');\n\n  h1.textContent = 'Saint Louis';\n\n  a1.textContent = 'Home';\n  a2.textContent = 'Menu';\n  a3.textContent = 'Contact';\n\n  a1.href = '#home';\n  a2.href = '#menu';\n  a3.href = '#contact';\n\n  li1.append(a1);\n  li2.append(a2);\n  li3.append(a3);\n\n  ul.append(li1, li2, li3);\n  nav.append(ul);\n  header.append(h1, nav);\n\n  return header;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerComponent);\n\n//# sourceURL=webpack://restaurant-page/./src/components/main-header/main-header.js?");

/***/ }),

/***/ "./src/functions/load-page.js":
/*!************************************!*\
  !*** ./src/functions/load-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_main_header_main_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main-header/main-header */ \"./src/components/main-header/main-header.js\");\n/* harmony import */ var _components_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main-banner/main-banner */ \"./src/components/main-banner/main-banner.js\");\n/* harmony import */ var _components_main_footer_main_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main-footer/main-footer */ \"./src/components/main-footer/main-footer.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu/index.js\");\n\n\n\n\n\nconst loadPage = () => {\n  document.getElementById('content').append((0,_components_main_header_main_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), (0,_components_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), (0,_components_main_footer_main_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/functions/load-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/load-page */ \"./src/functions/load-page.js\");\n\n\n(0,_functions_load_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/menu/index.js":
/*!*********************************!*\
  !*** ./src/pages/menu/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPage = () => {\n  const containerDiv = document.createElement('div');\n  const espressoDiv = document.createElement('div');\n  const capuccinoDiv = document.createElement('div');\n  const macchiatoDiv = document.createElement('div');\n  const latteDiv = document.createElement('div');\n  const mochaDiv = document.createElement('div');\n  const affogatoDiv = document.createElement('div');\n\n  const espressoH2 = document.createElement('h2');\n  const capuccinoH2 = document.createElement('h2');\n  const macchiatoH2 = document.createElement('h2');\n  const latteH2 = document.createElement('h2');\n  const mochaH2 = document.createElement('h2');\n  const affogatoH2 = document.createElement('h2');\n\n  const espressoP = document.createElement('p');\n  const capuccinoP = document.createElement('p');\n  const macchiatoP = document.createElement('p');\n  const latteP = document.createElement('p');\n  const mochaP = document.createElement('p');\n  const affogatoP = document.createElement('p');\n\n  espressoH2.textContent = 'Espresso';\n  capuccinoH2.textContent = 'Capuccino';\n  macchiatoH2.textContent = 'Macchiato';\n  latteH2.textContent = 'Latte';\n  mochaH2.textContent = 'Mocha';\n  affogatoH2.textContent = 'Affogato';\n\n  espressoP.textContent = 'Espresso is a coffee-brewing method in which a small amount of nearly boiling water is forced under bars of atmospheric pressure through finely-ground coffee beans.'; \n  capuccinoP.textContent = 'A cappuccino is an espresso-based coffee drink that originated in Austria with later development taking place in Italy, and is prepared with steamed milk foam.';\n  macchiatoP.textContent = 'Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed.';\n  latteP.textContent = 'Caffè latte, often shortened to just latte in English, is a coffee beverage of Italian origin made with espresso and steamed milk.';\n  mochaP.textContent = 'A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a café latte commonly served in a glass rather than a mug.';\n  affogatoP.textContent = 'An affogato or more traditionally known as \"affogato al caffe\" (Italian for \"drowned in coffee\") is an Italian coffee-based dessert.';\n\n  espressoDiv.append(espressoH2, espressoP);\n  capuccinoDiv.append(capuccinoH2, capuccinoP);\n  macchiatoDiv.append(macchiatoH2, macchiatoP);\n  latteDiv.append(latteH2, latteP);\n  mochaDiv.append(mochaH2, mochaP);\n  affogatoDiv.append(affogatoH2, affogatoP);\n\n  containerDiv.id = 'menu';\n  containerDiv.append(espressoDiv, capuccinoDiv, macchiatoDiv, latteDiv, mochaDiv, affogatoDiv);\n\n  return containerDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu/index.js?");

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