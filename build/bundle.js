/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createGameCanvas.js":
/*!*********************************!*\
  !*** ./src/createGameCanvas.js ***!
  \*********************************/
/*! exports provided: createGameCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGameCanvas\", function() { return createGameCanvas; });\nconst createGameCanvas = () => {\n  const canvas = document.createElement(\"canvas\");\n  canvas.setAttribute(\"id\", \"gamecanvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = 300;\n  canvas.height = 300;\n  document.body.appendChild(canvas);\n  return ctx;\n};\n\n\n//# sourceURL=webpack:///./src/createGameCanvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImages */ \"./src/loadImages.js\");\n/* harmony import */ var _loadSounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadSounds */ \"./src/loadSounds.js\");\n/* harmony import */ var _createGameCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createGameCanvas */ \"./src/createGameCanvas.js\");\n/* harmony import */ var _runGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runGame */ \"./src/runGame.js\");\n\n\n\n\n\nconst imagesFolder = \"images\";\nconst imageFiles = [\"bk.png\", \"ground.png\"];\nconst soundsFolder = \"audio\";\nconst soundFiles = [\"game.mp3\"];\n\nconst initAndRunGame = async () => {\n  try {\n    const canvasReference = Object(_createGameCanvas__WEBPACK_IMPORTED_MODULE_2__[\"createGameCanvas\"])();\n    const images = await Object(_loadImages__WEBPACK_IMPORTED_MODULE_0__[\"loadImages\"])(\n      imageFiles.map((image) => imagesFolder + \"/\" + image)\n    );\n    const sounds = await Object(_loadSounds__WEBPACK_IMPORTED_MODULE_1__[\"loadSounds\"])(\n      soundFiles.map((sound) => soundsFolder + \"/\" + sound)\n    );\n    const assets = { images: images, sounds: sounds };\n    Object(_runGame__WEBPACK_IMPORTED_MODULE_3__[\"runGame\"])(canvasReference, assets);\n  } catch (err) {\n    console.error(\"Could not initialize and run game:\", err);\n  }\n};\n\ndocument.getElementById(\"body\").addEventListener(\"click\", initAndRunGame);\n// initAndRunGame();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadImages.js":
/*!***************************!*\
  !*** ./src/loadImages.js ***!
  \***************************/
/*! exports provided: loadImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImages\", function() { return loadImages; });\nconst loadImage = (url) =>\n  new Promise((resolve, reject) => {\n    const img = new Image();\n    img.addEventListener(\"load\", () => resolve(img));\n    img.addEventListener(\"error\", reject);\n    img.src = url;\n  });\n\nconst loadImages = async (urls) => {\n  try {\n    return await Promise.all(urls.map((url) => loadImage(url)));\n  } catch (err) {\n    console.log(\"error loading image assets\");\n  }\n};\n\n\n//# sourceURL=webpack:///./src/loadImages.js?");

/***/ }),

/***/ "./src/loadSounds.js":
/*!***************************!*\
  !*** ./src/loadSounds.js ***!
  \***************************/
/*! exports provided: loadSounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSounds\", function() { return loadSounds; });\nconst loadSound = (url) =>\n  new Promise((resolve, reject) => {\n    const sound = new Audio();\n    sound.addEventListener(\"loadeddata\", () => resolve(sound));\n    sound.addEventListener(\"error\", reject);\n    sound.src = url;\n  });\n\nconst loadSounds = async (urls) => {\n  try {\n    return await Promise.all(urls.map((url) => loadSound(url)));\n  } catch (err) {\n    console.log(\"error loading audio assets\");\n  }\n};\n\n\n//# sourceURL=webpack:///./src/loadSounds.js?");

/***/ }),

/***/ "./src/runGame.js":
/*!************************!*\
  !*** ./src/runGame.js ***!
  \************************/
/*! exports provided: runGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runGame\", function() { return runGame; });\nconst runGame = (ctx, assets) => {\n  const bkg = assets.images[0];\n\n  let imgWidth = 0;\n  let scrollSpeed = 0.5;\n\n  const music = assets.sounds[0];\n  music.loop = true;\n  music.play();\n\n  function loop() {\n    ctx.drawImage(bkg, 0 - imgWidth, 0);\n    ctx.drawImage(bkg, 300 - imgWidth, 0);\n    imgWidth += scrollSpeed;\n    if (imgWidth >= 300) imgWidth = 0;\n    window.requestAnimationFrame(loop);\n  }\n\n  loop();\n};\n\n\n//# sourceURL=webpack:///./src/runGame.js?");

/***/ })

/******/ });