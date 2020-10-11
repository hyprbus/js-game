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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImages */ \"./src/loadImages.js\");\n\n\nconst canvas = document.createElement(\"canvas\");\ncanvas.setAttribute(\"id\", \"gamecanvas\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.width = 300;\ncanvas.height = 300;\ndocument.body.appendChild(canvas);\n\nconst imagesFolder = \"images\";\nconst imageFiles = [\"bk.png\", \"ground.png\"];\n\nconst loadAssets = async () => {\n  try {\n    const images = await Object(_loadImages__WEBPACK_IMPORTED_MODULE_0__[\"loadImages\"])(\n      imageFiles.map((image) => imagesFolder + \"/\" + image)\n    );\n    return images;\n  } catch (err) {\n    console.error(\"Could not load fukcing image\");\n  }\n};\n\nloadAssets()\n  .then((imgs) => {\n    const ground = imgs[0];\n    ctx.drawImage(ground, 0, 0);\n  })\n  .catch((err) => console.log(err));\n\n/*\nloadImage(\"images/ground.png\")\n  .then((ground) => {\n    var imgwidth = ground.width;\n    var imgheight = ground.height;\n    canvas.width = imgwidth * 2;\n    canvas.height = imgheight * 2;\n    ctx.scale(2, 2);\n    ctx.drawImage(ground, 1, 1);\n  })\n  .catch((err) =>\n    console.log(\n      \"Error loading image\",\n      console.error(err.name + \": \" + err.message)\n    )\n  );\n*/\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadImages.js":
/*!***************************!*\
  !*** ./src/loadImages.js ***!
  \***************************/
/*! exports provided: loadImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImages\", function() { return loadImages; });\nconst loadImage = (url) =>\n  new Promise((resolve, reject) => {\n    const img = new Image();\n    img.addEventListener(\"load\", () => resolve(img));\n    img.addEventListener(\"error\", reject);\n    img.src = url;\n  });\n\nconst loadImages = async (urls) => {\n  try {\n    return await Promise.all(urls.map((url) => loadImage(url)));\n  } catch (err) {\n    console.log(\"error loading image assets\");\n  }\n};\n\n\n//# sourceURL=webpack:///./src/loadImages.js?");

/***/ })

/******/ });