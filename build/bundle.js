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

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n// import { detectCollision } from \"./collisionDetection\";\n\nclass Background {\n  constructor(game, img) {\n    this.image = img;\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.size = { x: this.gameWidth, y: this.gameHeight };\n    this.reset();\n  }\n\n  reset() {\n    this.position = { x: 0, y: 0 };\n    this.speed = { x: 0, y: 2 };\n  }\n\n  draw(ctx) {\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y,\n      this.size.x,\n      this.size.y\n    );\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y - this.gameHeight,\n      this.size.x,\n      this.size.y\n    );\n  }\n\n  update(deltaTime) {\n    this.position.x += this.speed.x;\n    this.position.y += this.speed.y;\n\n    if (this.position.y >= this.gameHeight) {\n      this.position.y = 0;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/createGameCanvas.js":
/*!*********************************!*\
  !*** ./src/createGameCanvas.js ***!
  \*********************************/
/*! exports provided: createGameCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGameCanvas\", function() { return createGameCanvas; });\nconst createGameCanvas = (id, width, height) => {\n  const canvas = document.createElement(\"canvas\");\n  canvas.setAttribute(\"id\", id);\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = width;\n  canvas.height = height;\n  document.body.appendChild(canvas);\n  return ctx;\n};\n\n\n//# sourceURL=webpack:///./src/createGameCanvas.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocket */ \"./src/rocket.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\n// import Ball from \"/src/ball\";\n// import Brick from \"/src/brick\";\n\n// import { buildLevel, level1, level2 } from \"/src/levels\";\n\nconst GAMESTATE = {\n  PAUSED: 0,\n  RUNNING: 1,\n  MENU: 2,\n  GAMEOVER: 3,\n  NEWLEVEL: 4,\n};\n\nclass Game {\n  constructor(gameWidth, gameHeight, assets) {\n    console.log(assets);\n    this.gameWidth = gameWidth;\n    this.gameHeight = gameHeight;\n    this.gamestate = GAMESTATE.MENU;\n    // this.ball = new Ball(this);\n    this.rocket = new _rocket__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, assets.images[2]);\n    this.background = new _background__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, assets.images[0]);\n    this.gameObjects = [];\n    // this.bricks = [];\n    this.lives = 3;\n\n    // this.levels = [level1, level2];\n    // this.currentLevel = 0;\n\n    new _input__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.rocket, this);\n  }\n\n  start() {\n    if (\n      this.gamestate !== GAMESTATE.MENU &&\n      this.gamestate !== GAMESTATE.NEWLEVEL\n    )\n      return;\n\n    this.gameObjects = [this.background, this.rocket];\n\n    this.gamestate = GAMESTATE.RUNNING;\n  }\n\n  update(deltaTime) {\n    if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;\n\n    if (\n      this.gamestate === GAMESTATE.PAUSED ||\n      this.gamestate === GAMESTATE.MENU ||\n      this.gamestate === GAMESTATE.GAMEOVER\n    )\n      return;\n\n    this.gameObjects.forEach((object) => object.update(deltaTime));\n\n    // this.bricks = this.bricks.filter((brick) => !brick.markedForDeletion);\n  }\n\n  draw(ctx) {\n    this.gameObjects.forEach((object) => object.draw(ctx));\n\n    if (this.gamestate === GAMESTATE.PAUSED) {\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,0.5)\";\n      ctx.fill();\n\n      ctx.font = \"30px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"Paused\", this.gameWidth / 2, this.gameHeight / 2);\n    }\n\n    if (this.gamestate === GAMESTATE.MENU) {\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,1)\";\n      ctx.fill();\n\n      ctx.font = \"20px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"Press SPACEBAR To Start\", this.gameWidth / 2, 20);\n    }\n    if (this.gamestate === GAMESTATE.GAMEOVER) {\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,1)\";\n      ctx.fill();\n\n      ctx.font = \"30px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"GAME OVER\", this.gameWidth / 2, this.gameHeight / 2);\n    }\n  }\n\n  togglePause() {\n    if (this.gamestate == GAMESTATE.PAUSED) {\n      this.gamestate = GAMESTATE.RUNNING;\n    } else {\n      this.gamestate = GAMESTATE.PAUSED;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImages */ \"./src/loadImages.js\");\n/* harmony import */ var _loadSounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadSounds */ \"./src/loadSounds.js\");\n/* harmony import */ var _createGameCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createGameCanvas */ \"./src/createGameCanvas.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n// import { runGame } from \"./runGame\";\n\n\nconst imagesFolder = \"images\";\nconst imageFiles = [\"bk.png\", \"ground.png\", \"rocket.png\"];\nconst soundsFolder = \"audio\";\nconst soundFiles = [\"game.mp3\"];\nconst gameCanvasId = \"ctx\";\nconst GAME_WIDTH = 800;\nconst GAME_HEIGHT = 600;\nconst ctx = Object(_createGameCanvas__WEBPACK_IMPORTED_MODULE_2__[\"createGameCanvas\"])(gameCanvasId, GAME_WIDTH, GAME_HEIGHT);\n\nlet lastTime = 0;\n\nconst initAndRunGame = async () => {\n  try {\n    const images = await Object(_loadImages__WEBPACK_IMPORTED_MODULE_0__[\"loadImages\"])(\n      imageFiles.map((image) => imagesFolder + \"/\" + image)\n    );\n    const sounds = await Object(_loadSounds__WEBPACK_IMPORTED_MODULE_1__[\"loadSounds\"])(\n      soundFiles.map((sound) => soundsFolder + \"/\" + sound)\n    );\n    const assets = { images: images, sounds: sounds };\n    let game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"](GAME_WIDTH, GAME_HEIGHT, assets);\n    function gameLoop(timestamp) {\n      let deltaTime = timestamp - lastTime;\n      lastTime = timestamp;\n      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n\n      game.update(deltaTime);\n      game.draw(ctx);\n\n      requestAnimationFrame(gameLoop);\n    }\n    requestAnimationFrame(gameLoop);\n  } catch (err) {\n    console.error(\"Could not initialize and run game:\", err);\n  }\n};\n\ninitAndRunGame();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n  constructor(rocket, game) {\n    document.addEventListener(\"keydown\", (event) => {\n      switch (event.keyCode) {\n        case 37:\n          rocket.moveLeft();\n          break;\n\n        case 39:\n          rocket.moveRight();\n          break;\n\n        case 27:\n          game.togglePause();\n          break;\n\n        case 32:\n          game.start();\n          console.log(\"start...\");\n          break;\n      }\n    });\n\n    document.addEventListener(\"keyup\", (event) => {\n      switch (event.keyCode) {\n        case 37:\n          if (rocket.speed < 0) rocket.stop();\n          break;\n\n        case 39:\n          if (rocket.speed > 0) rocket.stop();\n          break;\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/input.js?");

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

/***/ "./src/rocket.js":
/*!***********************!*\
  !*** ./src/rocket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rocket; });\nclass Rocket {\n  constructor(game, img) {\n    this.gameWidth = game.gameWidth;\n\n    this.image = img;\n    this.width = 16;\n    this.height = 16;\n    this.maxSpeed = 7;\n    this.speed = 0;\n\n    this.position = {\n      x: game.gameWidth / 2 - this.width / 2,\n      y: game.gameHeight - this.height - 16,\n    };\n  }\n\n  moveLeft() {\n    this.speed = -this.maxSpeed;\n  }\n\n  moveRight() {\n    this.speed = this.maxSpeed;\n  }\n\n  stop() {\n    this.speed = 0;\n  }\n\n  draw(ctx) {\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y,\n      this.width,\n      this.height\n    );\n  }\n\n  update(deltaTime) {\n    this.position.x += this.speed;\n\n    if (this.position.x < 0) this.position.x = 0;\n\n    if (this.position.x + this.width > this.gameWidth)\n      this.position.x = this.gameWidth - this.width;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/rocket.js?");

/***/ })

/******/ });