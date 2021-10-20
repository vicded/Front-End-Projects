/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/console-browserify/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/user/Documents/programacion/html/musicFest/node_modules/console-browserify/index.js'\");\n\n//# sourceURL=webpack://musicfest/./node_modules/console-browserify/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_galery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/galery */ \"./src/js/galery.js\");\n/* harmony import */ var _js_galery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_galery__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './main.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n//import  sayHi  from \"./fun.js\";\n\n\n\n\n\n//sayHi();\n\n//# sourceURL=webpack://musicfest/./src/index.js?");

/***/ }),

/***/ "./src/js/galery.js":
/*!**************************!*\
  !*** ./src/js/galery.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n//import imageminGifsicle = require(\"imagemin-gifsicle\");\n\n\ndocument.addEventListener('DOMContentLoaded',function(){\n    initApp();\n});\n\nfunction initApp() {\n    stickyNav();\n    createGalery();\n    scrollNav();\n}\n\n\nfunction stickyNav() {\n    const navigation = document.querySelector('.header');\n    const preview = document.querySelector('.preview');\n    const body = document.querySelector('body');\n\n    window.addEventListener('scroll', function(){\n       \n\n        if(preview.getBoundingClientRect().top < 0) {\n            navigation.classList.add('sticky');\n            body.classList.add('body-scroll');\n        } else {\n            navigation.classList.remove('sticky');\n            body.classList.remove('body-scroll');\n        }\n    });\n\n}\n\nfunction scrollNav() {\n    const links = document.querySelectorAll('.navegation-main a');\n    console.log(links);\n\n    links.forEach(links => {\n        links.addEventListener('click', function(e) {\n            e.preventDefault();\n\n            const sectionScroll = e.target.attributes.href.value;\n            const section = document.querySelector(sectionScroll);\n\n            section.scrollIntoView({behavior: \"smooth\"});\n            \n        });\n    });\n}\n\nfunction createGalery() {\n    const galery = document.querySelector('.galery-images');\n    //console.log(galery);\n    for (let index = 1; index <= 12; index++) {\n        const image = document.createElement('picture');\n        image.innerHTML = `\n        <img loading=lazy  src=\"../src/img/thumb/${index}.jpg\" alt=\"festival image\" >`;\n        \n        //console.log(image);\n        image.onclick = function() {\n            showImage(index);\n        }\n\n        galery.appendChild(image);\n    }   \n}\n\nfunction showImage(id) {\n    console.log('Mostrando ', id);\n    const image = document.createElement('picture');\n        image.innerHTML = `\n        <img loading=lazy  src=\"../src/img/grande/${id}.jpg\" alt=\"festival image\" >\n    `;\n    \n\n    //Creates overlay\n    const overlay = document.createElement('DIV');\n    overlay.appendChild(image);\n    overlay.classList.add('overlay');\n\n    overlay.onclick = function() {\n        const body = document.querySelector('body'); \n        body.classList.remove('fix-body');\n        ///\n        const bigImage = document.querySelector('.galery img');\n        bigImage.classList.remove('big-img');\n\n        overlay.remove();\n    }\n\n    // button to close modal window\n    const closeModal = document.createElement('P');\n    closeModal.textContent = 'x';\n    closeModal.classList.add('bttn-close');\n    closeModal.onclick = function() {\n        const body = document.querySelector('body');\n        body.classList.remove('fix-body');\n        overlay.remove();\n    }\n\n    overlay.appendChild(closeModal)\n\n    //injects overlay\n    const body = document.querySelector('body');\n    body.appendChild(overlay);\n    body.classList.add('fix-body');\n\n    const bigImage = document.querySelector('.galery img');\n    bigImage.classList.add('big-img');\n\n}\n\n\n\n//# sourceURL=webpack://musicfest/./src/js/galery.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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