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

/***/ "./src/alien.js":
/*!**********************!*\
  !*** ./src/alien.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alien; });\n/* harmony import */ var _detectCollision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detectCollision */ \"./src/detectCollision.js\");\n\n\nclass Alien {\n  constructor(game, position) {\n    this.image = game.assets.images.alien;\n    this.sound = game.assets.sounds[2];\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.width = 16;\n    this.height = 16;\n    this.position = { x: position.x, y: position.y };\n    this.speed = game.gameSpeed;\n    this.vector = { x: this.speed, y: 0 };\n    this.markedForDeletion = false;\n  }\n\n  draw(ctx) {\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y,\n      this.width,\n      this.height\n    );\n  }\n\n  update(deltaTime) {\n    if (Object(_detectCollision__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this.game.rocket, this)) {\n      this.game.laser.reset();\n      this.game.subtractLife();\n    }\n\n    if (this.game.laser.isShooting && Object(_detectCollision__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this.game.laser, this)) {\n      this.sound.pause();\n      this.sound.currentTime = 0;\n      this.sound.play();\n      this.markedForDeletion = true;\n      this.game.laser.reset();\n    }\n\n    this.position.x += this.vector.x;\n    this.position.y += this.vector.y;\n\n    if (this.position.y > this.gameHeight) {\n      this.position.y = -20;\n    }\n\n    if (this.position.x >= this.gameWidth - this.width) {\n      this.vector.x = -this.speed;\n      this.vector.y = Math.random() * this.speed;\n    }\n\n    if (this.position.x <= 0) {\n      this.vector.x = this.speed;\n      this.vector.y = Math.random() * this.speed;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/alien.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n// import { detectCollision } from \"./collisionDetection\";\n\nclass Background {\n  constructor(game, img) {\n    this.image = img;\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.size = { x: this.gameWidth, y: this.gameHeight };\n    this.reset();\n  }\n\n  reset() {\n    this.position = { x: 0, y: 0 };\n    this.speed = { x: 0, y: 0.5 };\n  }\n\n  draw(ctx) {\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y,\n      this.size.x,\n      this.size.y\n    );\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y - this.gameHeight,\n      this.size.x,\n      this.size.y\n    );\n  }\n\n  update(deltaTime) {\n    this.position.x += this.speed.x;\n    this.position.y += this.speed.y;\n\n    if (this.position.y >= this.gameHeight) {\n      this.position.y = 0;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: GAMESTATE, LIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAMESTATE\", function() { return GAMESTATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIVES\", function() { return LIVES; });\nconst GAMESTATE = {\n  RUNNING: 1,\n  MENU: 2,\n  GAMEOVER: 3,\n  NEWLEVEL: 4,\n};\n\nconst LIVES = 3;\n\n\n//# sourceURL=webpack:///./src/constants.js?");

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

/***/ "./src/detectCollision.js":
/*!********************************!*\
  !*** ./src/detectCollision.js ***!
  \********************************/
/*! exports provided: detectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\nfunction detectCollision(source, target) {\n  let topOfSource = source.position.y;\n  let leftSideOfSource = source.position.x;\n  let rightSideOfSource = source.position.x + source.width;\n  let bottomOfSource = source.position.y + source.height;\n\n  let topOfTarget = target.position.y;\n  let leftSideOfTarget = target.position.x;\n  let rightSideOfTarget = target.position.x + target.width;\n  let bottomOfTarget = target.position.y + target.height;\n\n  // fix collision detection, not right! Should be when they touch, isn't now.\n  if (\n    bottomOfSource > topOfTarget &&\n    topOfSource < bottomOfTarget &&\n    rightSideOfSource > leftSideOfTarget &&\n    leftSideOfSource < rightSideOfTarget\n  ) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/detectCollision.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocket */ \"./src/rocket.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./particle */ \"./src/particle.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n\n\n\n\n\nclass Game {\n  constructor(gameWidth, gameHeight, assets) {\n    this.gameWidth = gameWidth;\n    this.gameHeight = gameHeight;\n    this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].MENU;\n    this.gameSpeed = 5;\n    this.assets = assets;\n    this.rocket = new _rocket__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.laser = new _laser__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n    this.background = new _background__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, assets.images.background);\n    this.gameObjects = [];\n    this.lives = _constants__WEBPACK_IMPORTED_MODULE_6__[\"LIVES\"];\n    this.aliens = [];\n    this.explosions = [];\n\n    // this.levels = [level1, level2];\n    // this.currentLevel = 0;\n\n    new _input__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.rocket, this.laser, this);\n  }\n\n  start() {\n    if (\n      this.gamestate !== _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].MENU &&\n      this.gamestate !== _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].NEWLEVEL &&\n      this.gamestate !== _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].GAMEOVER\n    )\n      return;\n    this.lives = _constants__WEBPACK_IMPORTED_MODULE_6__[\"LIVES\"];\n    this.aliens = Object(_levels__WEBPACK_IMPORTED_MODULE_5__[\"buildLevel\"])(this);\n    this.gameObjects = [this.background, this.rocket, this.laser];\n\n    this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].RUNNING;\n  }\n\n  subtractLife() {\n    const deathSound = this.assets.sounds[3];\n    deathSound.pause();\n    deathSound.currentTime = 0;\n    deathSound.play();\n    this.lives = 0;\n  }\n\n  update(deltaTime) {\n    if (this.lives === 0) this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].GAMEOVER;\n\n    if (\n      this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].PAUSED ||\n      this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].MENU ||\n      this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].GAMEOVER\n    )\n      return;\n    [\n      ...this.gameObjects,\n      ...this.aliens,\n      ...this.explosions,\n    ].forEach((object) => object.update(deltaTime));\n\n    this.explosions = this.explosions.filter(\n      (particle) => !particle.markedForDeletion\n    );\n    this.aliens.forEach((alien) => {\n      if (alien.markedForDeletion) {\n        for (let i = 0; i < 20; i++) {\n          this.explosions.push(new _particle__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, alien.position));\n        }\n      }\n    });\n    this.aliens = this.aliens.filter((alien) => !alien.markedForDeletion);\n  }\n\n  draw(ctx) {\n    [\n      ...this.gameObjects,\n      ...this.aliens,\n      ...this.explosions,\n    ].forEach((object) => object.draw(ctx));\n\n    if (this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].PAUSED) {\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,0.5)\";\n      ctx.fill();\n\n      ctx.font = \"30px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"Paused\", this.gameWidth / 2, this.gameHeight / 2);\n    }\n\n    if (this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].MENU) {\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,1)\";\n      ctx.fill();\n\n      ctx.font = \"20px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"Press ENTER To Start\", this.gameWidth / 2, 20);\n    }\n    if (this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].GAMEOVER) {\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,1)\";\n      ctx.fill();\n\n      ctx.font = \"30px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"GAME OVER\", this.gameWidth / 2, this.gameHeight / 2);\n      ctx.fillText(\n        \"Press ENTER to play again\",\n        this.gameWidth / 2,\n        this.gameHeight / 2 + 40\n      );\n    }\n  }\n\n  togglePause() {\n    if (this.gamestate == _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].PAUSED) {\n      this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].RUNNING;\n    } else {\n      this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_6__[\"GAMESTATE\"].PAUSED;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImages */ \"./src/loadImages.js\");\n/* harmony import */ var _loadSounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadSounds */ \"./src/loadSounds.js\");\n/* harmony import */ var _createGameCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createGameCanvas */ \"./src/createGameCanvas.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\nconst imageFiles = [\n  { background: \"images/bk.png\" },\n  { rocket: \"images/rocket.png\" },\n  { laser: \"images/laser.png\" },\n  { alien: \"images/alien.png\" },\n];\nconst soundsFolder = \"audio\";\nconst soundFiles = [\"game.mp3\", \"laser.mp3\", \"explosion.mp3\", \"death.mp3\"];\nconst gameCanvasId = \"ctx\";\nconst GAME_WIDTH = 800;\nconst GAME_HEIGHT = 600;\nconst ctx = Object(_createGameCanvas__WEBPACK_IMPORTED_MODULE_2__[\"createGameCanvas\"])(gameCanvasId, GAME_WIDTH, GAME_HEIGHT);\n\nlet lastTime = 0;\n\nconst initAndRunGame = async () => {\n  try {\n    const images = await Object(_loadImages__WEBPACK_IMPORTED_MODULE_0__[\"loadImages\"])(imageFiles);\n    const sounds = await Object(_loadSounds__WEBPACK_IMPORTED_MODULE_1__[\"loadSounds\"])(\n      soundFiles.map((sound) => soundsFolder + \"/\" + sound)\n    );\n    const assets = { images: images, sounds: sounds };\n    let game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"](GAME_WIDTH, GAME_HEIGHT, assets);\n    const gameLoop = (ctx) => (timestamp) => {\n      let deltaTime = timestamp - lastTime;\n      lastTime = timestamp;\n      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n\n      game.update(deltaTime);\n      game.draw(ctx);\n\n      requestAnimationFrame(gameLoop(ctx));\n    };\n    requestAnimationFrame(gameLoop(ctx));\n  } catch (err) {\n    console.error(\"Could not initialize and run game:\", err);\n  }\n};\n\ninitAndRunGame();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n  constructor(rocket, laser, game) {\n    document.addEventListener(\"keydown\", (event) => {\n      switch (event.keyCode) {\n        case 37:\n          rocket.moveLeft();\n          break;\n\n        case 39:\n          rocket.moveRight();\n          break;\n\n        case 32:\n          laser.fire();\n          break;\n\n        case 27:\n          game.togglePause();\n          break;\n\n        case 13:\n          game.start();\n          break;\n      }\n    });\n\n    document.addEventListener(\"keyup\", (event) => {\n      switch (event.keyCode) {\n        case 37:\n          if (rocket.speed < 0) rocket.stop();\n          break;\n\n        case 39:\n          if (rocket.speed > 0) rocket.stop();\n          break;\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Laser; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass Laser {\n  constructor(game) {\n    this.image = game.assets.images.laser;\n    this.sound = game.assets.sounds[1];\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.width = 4;\n    this.height = 16;\n    this.position = { x: 400, y: 550 };\n    this.isShooting = false;\n    this.reset();\n  }\n\n  reset() {\n    this.position = { x: 400, y: 550 };\n    this.speed = { x: 0, y: -4 };\n    this.isShooting = false;\n  }\n\n  fire() {\n    if (this.isShooting || this.game.gamestate != _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAMESTATE\"].RUNNING) return;\n    this.position.x =\n      this.game.rocket.position.x + this.game.rocket.width / 2 - this.width / 2;\n    this.position.y = this.game.rocket.position.y - this.height;\n    this.sound.pause();\n    this.sound.currentTime = 0;\n    this.sound.play();\n    this.isShooting = true;\n  }\n\n  draw(ctx) {\n    if (!this.isShooting) return;\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y,\n      this.width,\n      this.height\n    );\n  }\n\n  update(deltaTime) {\n    if (!this.isShooting) return;\n    this.position.y += this.speed.y;\n\n    if (this.position.y < 0) {\n      this.reset();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/laser.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: buildLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLevel\", function() { return buildLevel; });\n/* harmony import */ var _alien__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alien */ \"./src/alien.js\");\n\n\nfunction buildLevel(game) {\n  let aliens = [];\n  const level = [\n    [1, 1, 1, 1, 1],\n    [1, 0, 1, 0, 1],\n  ];\n  level.forEach((row, rowIndex) => {\n    row.forEach((alien, alienIndex) => {\n      if (alien === 1) {\n        let position = {\n          x: 10 + 32 * alienIndex,\n          y: 10 + 32 * rowIndex,\n        };\n        aliens.push(new _alien__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, position));\n      }\n    });\n  });\n\n  return aliens;\n}\n\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/loadImages.js":
/*!***************************!*\
  !*** ./src/loadImages.js ***!
  \***************************/
/*! exports provided: loadImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImages\", function() { return loadImages; });\n// get array of image objects (name and url), return object with image keys and image files\n\nconst loadImage = (imageData) =>\n  new Promise((resolve, reject) => {\n    const img = new Image();\n    const imageID = Object.keys(imageData)[0];\n    img.addEventListener(\"load\", () => resolve({ [imageID]: img }));\n    img.addEventListener(\"error\", reject);\n    img.src = imageData[imageID];\n  });\n\nconst loadImages = async (imagesData) => {\n  try {\n    const imageArray = await Promise.all(\n      imagesData.map((urlObj) => loadImage(urlObj))\n    );\n    let images = {};\n    imageArray.forEach(\n      (image) => (images[Object.keys(image)[0]] = image[Object.keys(image)[0]])\n    );\n    return images;\n  } catch (err) {\n    console.error(\"error loading image assets\");\n  }\n};\n\n// handle resolve of promise and making it into an object\n\n\n//# sourceURL=webpack:///./src/loadImages.js?");

/***/ }),

/***/ "./src/loadSounds.js":
/*!***************************!*\
  !*** ./src/loadSounds.js ***!
  \***************************/
/*! exports provided: loadSounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSounds\", function() { return loadSounds; });\nconst loadSound = (url) =>\n  new Promise((resolve, reject) => {\n    const sound = new Audio();\n    sound.addEventListener(\"loadeddata\", () => resolve(sound));\n    sound.addEventListener(\"error\", reject);\n    sound.src = url;\n  });\n\nconst loadSounds = async (urls) => {\n  try {\n    return await Promise.all(urls.map((url) => loadSound(url)));\n  } catch (err) {\n    console.error(\"error loading audio assets\");\n  }\n};\n\n\n//# sourceURL=webpack:///./src/loadSounds.js?");

/***/ }),

/***/ "./src/particle.js":
/*!*************************!*\
  !*** ./src/particle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Particle; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass Particle {\n  constructor(game, position) {\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.width = 4;\n    this.height = 16;\n    this.position = { x: position.x, y: position.y };\n    this.speed = 20 * Math.random();\n    this.vector = {\n      x: this.speed * (Math.random() - 0.5),\n      y: this.speed * (Math.random() - 0.5),\n    };\n    this.opacity = 1;\n    this.lifeLength = 20;\n    this.radius = 10 * Math.random();\n    this.color = \"255, 255, 255\";\n    this.markedForDeletion = false;\n  }\n\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(\n      this.position.x,\n      this.position.y,\n      this.radius,\n      0,\n      2 * Math.PI,\n      false\n    );\n    ctx.fillStyle = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"rgbaToString\"])(this.color, this.opacity);\n    ctx.fill();\n  }\n\n  update(deltaTime) {\n    this.position.x += this.vector.x;\n    this.position.y += this.vector.y;\n    this.opacity = this.opacity - this.opacity / this.lifeLength;\n    if (this.opacity <= 0) {\n      this.opacity = 0;\n      this.markedForDeletion = true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/particle.js?");

/***/ }),

/***/ "./src/rocket.js":
/*!***********************!*\
  !*** ./src/rocket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rocket; });\nclass Rocket {\n  constructor(game) {\n    this.gameWidth = game.gameWidth;\n\n    this.image = game.assets.images.rocket;\n    this.width = 16;\n    this.height = 16;\n    this.maxSpeed = 7;\n    this.speed = 0;\n    this.position = {\n      x: game.gameWidth / 2 - this.width / 2,\n      y: game.gameHeight - this.height - 16,\n    };\n  }\n\n  moveLeft() {\n    this.speed = -this.maxSpeed;\n  }\n\n  moveRight() {\n    this.speed = this.maxSpeed;\n  }\n\n  stop() {\n    this.speed = 0;\n  }\n\n  draw(ctx) {\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y,\n      this.width,\n      this.height\n    );\n  }\n\n  update(deltaTime) {\n    this.position.x += this.speed;\n\n    if (this.position.x < 0) this.position.x = 0;\n\n    if (this.position.x + this.width > this.gameWidth)\n      this.position.x = this.gameWidth - this.width;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/rocket.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: rgbaToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbaToString\", function() { return rgbaToString; });\nconst rgbaToString = (rgb, alpha) => `rgba(${rgb}, ${alpha})`;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });