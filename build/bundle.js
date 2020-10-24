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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alien; });\n/* harmony import */ var _detectCollision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detectCollision */ \"./src/detectCollision.js\");\n\n\nclass Alien {\n  constructor({\n    game,\n    position,\n    imageKey,\n    width,\n    height,\n    initVector,\n    hitScore,\n    spriteAnimationOrder,\n    movementAlgorithm,\n  }) {\n    this.image = game.assets.images[imageKey];\n    this.sound = game.assets.sounds.explosion;\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.width = width;\n    this.height = height;\n    this.position = { ...position };\n    this.speed = game.gameSpeed;\n    this.vector = { ...initVector };\n    this.delete = false;\n    this.hitScore = hitScore;\n    this.sprites = spriteAnimationOrder;\n    this.spriteIndex = 0;\n    this.animationRate = 10;\n    this.animationRateCounter = 0;\n    this.movementAlgorithm = movementAlgorithm;\n  }\n\n  draw(ctx) {\n    ctx.drawImage(\n      this.image,\n      this.sprites[this.spriteIndex] * this.width,\n      0,\n      this.width,\n      this.height,\n      this.position.x,\n      this.position.y,\n      this.width,\n      this.height\n    );\n  }\n\n  update(deltaTime) {\n    if (Object(_detectCollision__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this.game.rocket, this)) {\n      this.game.rocketHitByAlien();\n    }\n\n    if (this.game.laser.isShooting && Object(_detectCollision__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this.game.laser, this)) {\n      this.sound.pause();\n      this.sound.currentTime = 0;\n      this.sound.play();\n      this.delete = true;\n      this.game.score = this.game.score + this.hitScore;\n      this.game.laser.reset();\n    }\n\n    this.position.x += this.vector.x;\n    this.position.y += this.vector.y;\n\n    if (this.position.y > this.gameHeight) {\n      this.position.y = -20;\n    }\n\n    this.movementAlgorithm(this);\n\n    this.animationRateCounter++;\n    if (this.animationRateCounter === this.animationRate) {\n      this.animationRateCounter = 0;\n      this.spriteIndex++;\n      if (this.spriteIndex === this.sprites.length) this.spriteIndex = 0;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/alien.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n// import { detectCollision } from \"./collisionDetection\";\n\nclass Background {\n  constructor(game, img) {\n    this.image = img;\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.size = { x: this.gameWidth, y: this.gameHeight };\n    this.reset();\n  }\n\n  reset() {\n    this.position = { x: 0, y: 0 };\n    this.speed = { x: 0, y: 2 };\n  }\n\n  draw(ctx) {\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y,\n      this.size.x,\n      this.size.y\n    );\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y - this.gameHeight,\n      this.size.x,\n      this.size.y\n    );\n  }\n\n  update(deltaTime) {\n    this.position.x += this.speed.x;\n    this.position.y += this.speed.y;\n\n    if (this.position.y >= this.gameHeight) {\n      this.position.y = 0;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: GAMESTATE, LIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAMESTATE\", function() { return GAMESTATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIVES\", function() { return LIVES; });\nconst GAMESTATE = {\n  RUNNING: 1,\n  MENU: 2,\n  GAMEOVER: 3,\n  WON: 4,\n};\n\nconst LIVES = 3;\n\n\n//# sourceURL=webpack:///./src/constants.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\nfunction detectCollision(source, target) {\n  if (source.delete || target.delete) return;\n  let topOfSource = source.position.y;\n  let leftSideOfSource = source.position.x;\n  let rightSideOfSource = source.position.x + source.width;\n  let bottomOfSource = source.position.y + source.height;\n\n  let topOfTarget = target.position.y;\n  let leftSideOfTarget = target.position.x;\n  let rightSideOfTarget = target.position.x + target.width;\n  let bottomOfTarget = target.position.y + target.height;\n\n  // fix collision detection, not right! Should be when they touch, isn't now.\n  if (\n    bottomOfSource > topOfTarget &&\n    topOfSource < bottomOfTarget &&\n    rightSideOfSource > leftSideOfTarget &&\n    leftSideOfSource < rightSideOfTarget\n  ) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/detectCollision.js?");

/***/ }),

/***/ "./src/explosion.js":
/*!**************************!*\
  !*** ./src/explosion.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Explosion; });\n/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ \"./src/particle.js\");\n\n\nclass Explosion {\n  constructor(\n    game,\n    position,\n    radius = 10,\n    lifeLength = 20,\n    noOfParticles = 8,\n    color = \"255, 255, 255\"\n  ) {\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.particles = [];\n    this.createParticles(\n      game,\n      position,\n      radius,\n      lifeLength,\n      noOfParticles,\n      color\n    );\n    this.delete = false;\n  }\n\n  createParticles(game, position, radius, lifeLength, noOfParticles, color) {\n    for (let i = 0; i < noOfParticles; i++) {\n      this.particles.push(\n        new _particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.game, position, radius, lifeLength, color)\n      );\n    }\n  }\n\n  draw(ctx) {\n    this.particles.forEach((particle) => particle.draw(ctx));\n  }\n\n  update(deltaTime) {\n    this.particles = this.particles.filter((particle) => !particle.delete);\n    if (this.particles.length === 0) {\n      this.delete = true;\n    }\n    this.particles.forEach((particle) => particle.update(deltaTime));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/explosion.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocket */ \"./src/rocket.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explosion */ \"./src/explosion.js\");\n\n\n\n\n\n\n\n\nclass Game {\n  constructor(gameWidth, gameHeight, assets) {\n    this.gameWidth = gameWidth;\n    this.gameHeight = gameHeight;\n    this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].MENU;\n    this.gameSpeed = 2;\n    this.assets = assets;\n    this.rocket = new _rocket__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.laser = new _laser__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n    this.background = new _background__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, assets.images.background);\n    this.gameObjects = [];\n    this.lives = _constants__WEBPACK_IMPORTED_MODULE_5__[\"LIVES\"];\n    this.aliens = [];\n    this.alienExplosions = [];\n    this.rocketExplosion = null;\n    this.level = 0;\n    this.score = 0;\n    this.music = this.assets.sounds.soundtrack;\n    this.musicIsPlaying = false;\n\n    new _input__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.rocket, this.laser, this);\n  }\n\n  reset() {\n    this.level = 0;\n    this.lives = _constants__WEBPACK_IMPORTED_MODULE_5__[\"LIVES\"];\n    this.score = 0;\n    this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].MENU;\n  }\n\n  startLevel() {\n    this.alienExplosions = [];\n    this.rocketExplosion = null;\n    this.rocket.delete = false;\n    this.aliens = Object(_levels__WEBPACK_IMPORTED_MODULE_4__[\"buildLevel\"])(this, _levels__WEBPACK_IMPORTED_MODULE_4__[\"levels\"][this.level]);\n    this.gameObjects = [this.background, this.rocket, this.laser];\n    this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].RUNNING;\n  }\n\n  startGame() {\n    if (this.gamestate !== _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].RUNNING) {\n      this.reset();\n      this.startLevel();\n    }\n    return;\n  }\n\n  rocketHitByAlien() {\n    const deathSound = this.assets.sounds.death;\n    deathSound.pause();\n    deathSound.currentTime = 0;\n    deathSound.play();\n    this.lives--;\n    this.laser.reset();\n    this.rocket.delete = true;\n    this.rocketExplosion = new _explosion__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\n      this,\n      this.rocket.position,\n      8,\n      80,\n      100,\n      \"0, 255, 255\"\n    );\n    this.gameObjects.push(this.rocketExplosion);\n    this.aliens.forEach((alien) => {\n      alien.position.y = -300;\n    });\n  }\n\n  update(deltaTime) {\n    if (this.lives === 0) {\n      this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].GAMEOVER;\n    }\n\n    if (\n      this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].PAUSED ||\n      this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].MENU\n    )\n      return;\n\n    if (this.musicIsPlaying === false) {\n      this.musicIsPlaying = true;\n      this.music.loop = true;\n      this.music.volume = 0.7;\n      this.music.play();\n    }\n\n    if (this.aliens.length === 0 && this.alienExplosions.length === 0) {\n      if (this.level === _levels__WEBPACK_IMPORTED_MODULE_4__[\"levels\"].length - 1) {\n        this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].WON;\n      } else {\n        this.level++;\n        this.startLevel();\n      }\n    }\n\n    [\n      ...this.gameObjects,\n      ...this.aliens,\n      ...this.alienExplosions,\n    ].forEach((object) => object.update(deltaTime));\n\n    this.alienExplosions = this.alienExplosions.filter(\n      (explosion) => !explosion.delete\n    );\n\n    this.gameObjects = this.gameObjects.filter(\n      (gameObject) => !gameObject.delete\n    );\n\n    if (\n      this.rocketExplosion &&\n      this.rocketExplosion.delete &&\n      this.gamestate !== _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].GAMEOVER\n    ) {\n      this.rocketExplosion = null;\n      this.rocket.delete = false;\n      this.gameObjects.push(this.rocket);\n    }\n\n    this.aliens.forEach((alien) => {\n      if (alien.delete) {\n        this.alienExplosions.push(\n          new _explosion__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, alien.position, 8, 30, 24, \"255, 255, 0\")\n        );\n      }\n    });\n    this.aliens = this.aliens.filter((alien) => !alien.delete);\n  }\n\n  draw(ctx) {\n    [\n      ...this.gameObjects,\n      ...this.aliens,\n      ...this.alienExplosions,\n    ].forEach((object) => object.draw(ctx));\n\n    if (this.gamestate !== _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].MENU) {\n      ctx.font = \"12px Courier\";\n      ctx.fillStyle = \"yellow\";\n      ctx.textAlign = \"left\";\n      ctx.fillText(\n        `Lives: ${this.lives} Score: ${this.score} Level: ${this.level}`,\n        8,\n        16\n      );\n    }\n\n    if (this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].PAUSED) {\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,0.5)\";\n      ctx.fill();\n\n      ctx.font = \"20px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"Paused\", this.gameWidth / 2, this.gameHeight / 2);\n    }\n\n    if (this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].MENU) {\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,1)\";\n      ctx.fill();\n\n      ctx.font = \"20px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\n        \"Press ENTER To Start\",\n        this.gameWidth / 2,\n        this.gameHeight / 2\n      );\n    }\n    if (this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].GAMEOVER) {\n      ctx.font = \"20px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"GAME OVER\", this.gameWidth / 2, this.gameHeight / 2);\n      ctx.fillText(\n        \"Press ENTER to play again\",\n        this.gameWidth / 2,\n        this.gameHeight / 2 + 40\n      );\n    }\n\n    if (this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].WON) {\n      ctx.font = \"20px Courier\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\n        \"You won! Earth is saved.\",\n        this.gameWidth / 2,\n        this.gameHeight / 2\n      );\n    }\n  }\n\n  togglePause() {\n    if (\n      this.gamestate !== _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].RUNNING &&\n      this.gamestate !== _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].PAUSED\n    )\n      return;\n    if (this.gamestate === _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].PAUSED) {\n      this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].RUNNING;\n    } else {\n      this.gamestate = _constants__WEBPACK_IMPORTED_MODULE_5__[\"GAMESTATE\"].PAUSED;\n      this.musicIsPlaying = false;\n      this.music.pause();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadAssets */ \"./src/loadAssets.js\");\n/* harmony import */ var _createGameCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGameCanvas */ \"./src/createGameCanvas.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\nconst imageFiles = [\n  { background: \"images/bk.png\" },\n  { rocket: \"images/rocket.png\" },\n  { laser: \"images/laser.png\" },\n  { alien: \"images/alien.png\" },\n  { alienBoss: \"images/alien-boss.png\" },\n];\nconst soundFiles = [\n  { soundtrack: \"audio/alien-attack-soundtrack.mp3\" },\n  { laser: \"audio/laser.mp3\" },\n  { explosion: \"audio/explosion.mp3\" },\n  { death: \"audio/death.mp3\" },\n];\nconst gameCanvasId = \"ctx\";\nconst GAME_WIDTH = 400;\nconst GAME_HEIGHT = 300;\nconst ctx = Object(_createGameCanvas__WEBPACK_IMPORTED_MODULE_1__[\"createGameCanvas\"])(gameCanvasId, GAME_WIDTH, GAME_HEIGHT);\n\nlet lastTime = 0;\n\nconst initAndRunGame = async () => {\n  try {\n    const images = await Object(_loadAssets__WEBPACK_IMPORTED_MODULE_0__[\"loadImages\"])(imageFiles);\n    const sounds = await Object(_loadAssets__WEBPACK_IMPORTED_MODULE_0__[\"loadSounds\"])(soundFiles);\n    const assets = { images: images, sounds: sounds };\n    let game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"](GAME_WIDTH, GAME_HEIGHT, assets);\n    const gameLoop = (ctx) => (timestamp) => {\n      let deltaTime = timestamp - lastTime;\n      lastTime = timestamp;\n      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n      game.update(deltaTime);\n      game.draw(ctx);\n      requestAnimationFrame(gameLoop(ctx));\n    };\n    requestAnimationFrame(gameLoop(ctx));\n  } catch (err) {\n    console.error(\"Could not initialize and run game:\", err);\n  }\n};\n\ninitAndRunGame();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n  constructor(rocket, laser, game) {\n    document.addEventListener(\"keydown\", (event) => {\n      switch (event.keyCode) {\n        case 37:\n          rocket.moveLeft();\n          break;\n\n        case 39:\n          rocket.moveRight();\n          break;\n\n        case 32:\n          laser.fire();\n          break;\n\n        case 27:\n          game.togglePause();\n          break;\n\n        case 13:\n          game.startGame();\n          break;\n      }\n    });\n\n    document.addEventListener(\"keyup\", (event) => {\n      switch (event.keyCode) {\n        case 37:\n          if (rocket.speed < 0) rocket.stop();\n          break;\n\n        case 39:\n          if (rocket.speed > 0) rocket.stop();\n          break;\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Laser; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass Laser {\n  constructor(game) {\n    this.image = game.assets.images.laser;\n    this.sound = game.assets.sounds.laser;\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.width = 4;\n    this.height = 16;\n    this.position = { x: 400, y: 550 };\n    this.isShooting = false;\n    this.reset();\n    this.speed = { x: 0, y: -4 };\n    this.velocity;\n  }\n\n  reset() {\n    this.position = { x: 400, y: 550 };\n    this.isShooting = false;\n  }\n\n  fire() {\n    if (\n      this.isShooting ||\n      this.game.gamestate != _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAMESTATE\"].RUNNING ||\n      this.game.rocket.isExploding\n    )\n      return;\n    this.position.x =\n      this.game.rocket.position.x + this.game.rocket.width / 2 - this.width / 2;\n    this.position.y = this.game.rocket.position.y - this.height;\n    this.sound.pause();\n    this.sound.currentTime = 0;\n    this.sound.play();\n    this.isShooting = true;\n  }\n\n  draw(ctx) {\n    if (!this.isShooting) return;\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y,\n      this.width,\n      this.height\n    );\n  }\n\n  update(deltaTime) {\n    if (!this.isShooting) return;\n    this.position.y += this.speed.y;\n\n    if (this.position.y < 0) {\n      this.reset();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/laser.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: levels, buildLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levels\", function() { return levels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLevel\", function() { return buildLevel; });\n/* harmony import */ var _alien__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alien */ \"./src/alien.js\");\n/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movement */ \"./src/movement.js\");\n\n\n\nconst level0 = [[1, 0, 1, 0, 1]];\n\nconst level1 = [[0, 0, 2], [0], [1, 1, 1, 1, 1]];\n\nconst level2 = [\n  [1, 0, 1, 0, 1],\n  [1, 1, 1, 1, 1],\n];\n\nconst level3 = [\n  [1, 1, 1, 1, 1],\n  [0, 1, 1, 1, 0],\n  [0, 0, 1, 0, 0],\n];\n\nconst level4 = [\n  [1, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 1],\n];\n\nconst level5 = [\n  [2, 0, 0, 0, 0, 0, 0, 0, 0, 2],\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n];\n\nconst level6 = [[0, 2, 0, 0, 2, 0, 0, 2], [0], [0, 0, 2, 0, 0, 2]];\n\nconst levels = [level0, level1, level2, level3, level4, level5, level6];\n\nfunction buildLevel(game, level) {\n  let aliens = [];\n  level.forEach((row, rowIndex) => {\n    row.forEach((alien, alienIndex) => {\n      let position = {\n        x: 16 + 32 * alienIndex,\n        y: 16 + 32 * rowIndex,\n      };\n      if (alien === 1) {\n        aliens.push(\n          new _alien__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            game: game,\n            position: position,\n            imageKey: \"alien\",\n            width: 16,\n            height: 16,\n            initVector: {\n              x: game.gameSpeed,\n              y: 0,\n            },\n            hitScore: 100,\n            spriteAnimationOrder: [0, 1],\n            movementAlgorithm: _movement__WEBPACK_IMPORTED_MODULE_1__[\"alienMovement\"],\n          })\n        );\n      }\n      if (alien === 2) {\n        aliens.push(\n          new _alien__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            game: game,\n            position: position,\n            imageKey: \"alienBoss\",\n            width: 32,\n            height: 32,\n            initVector: {\n              x: game.gameSpeed,\n              y: 0,\n            },\n            hitScore: 500,\n            spriteAnimationOrder: [0, 1],\n            movementAlgorithm: Object(_movement__WEBPACK_IMPORTED_MODULE_1__[\"alienBossMovement\"])({\n              angle: 0,\n              steps: 120,\n              swingWidth: 80,\n            }),\n          })\n        );\n      }\n    });\n  });\n\n  return aliens;\n}\n\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/loadAssets.js":
/*!***************************!*\
  !*** ./src/loadAssets.js ***!
  \***************************/
/*! exports provided: loadImages, loadSounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImages\", function() { return loadImages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSounds\", function() { return loadSounds; });\n// get array of image objects (name and url), return object with image keys and image files\n\nconst loadImage = (imageData) =>\n  new Promise((resolve, reject) => {\n    const img = new Image();\n    const imageID = Object.keys(imageData)[0];\n    img.addEventListener(\"load\", () => resolve({ [imageID]: img }));\n    img.addEventListener(\"error\", reject);\n    img.src = imageData[imageID];\n  });\n\nconst loadSound = (soundData) =>\n  new Promise((resolve, reject) => {\n    const sound = new Audio();\n    const soundID = Object.keys(soundData)[0];\n    sound.addEventListener(\"loadeddata\", () => resolve({ [soundID]: sound }));\n    sound.addEventListener(\"error\", reject);\n    sound.src = soundData[soundID];\n  });\n\nconst loadAssets = (loadFunction) => async (imagesData) => {\n  try {\n    const imageArray = await Promise.all(\n      imagesData.map((urlObj) => loadFunction(urlObj))\n    );\n    let images = {};\n    imageArray.forEach(\n      (image) => (images[Object.keys(image)[0]] = image[Object.keys(image)[0]])\n    );\n    return images;\n  } catch (err) {\n    console.error(\"error loading image assets\");\n  }\n};\n\nconst loadImages = loadAssets(loadImage);\nconst loadSounds = loadAssets(loadSound);\n\n\n//# sourceURL=webpack:///./src/loadAssets.js?");

/***/ }),

/***/ "./src/movement.js":
/*!*************************!*\
  !*** ./src/movement.js ***!
  \*************************/
/*! exports provided: alienMovement, alienBossMovement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"alienMovement\", function() { return alienMovement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"alienBossMovement\", function() { return alienBossMovement; });\nfunction alienMovement(gameObject) {\n  if (gameObject.position.x >= gameObject.gameWidth - gameObject.width) {\n    gameObject.vector.x = -gameObject.speed;\n    gameObject.vector.y = Math.round(Math.random()) * gameObject.speed;\n  }\n\n  if (gameObject.position.x <= 0) {\n    gameObject.vector.x = gameObject.speed;\n    gameObject.vector.y = Math.round(Math.random()) * gameObject.speed;\n  }\n\n  if (\n    gameObject.position.y > gameObject.gameHeight - 50 ||\n    gameObject.position.y < 0\n  )\n    gameObject.vector.y = gameObject.speed;\n}\n\nconst alienBossMovement = ({ angle, steps, swingWidth }) => (\n  gameObject\n) => {\n  gameObject.vector.y = Math.abs(gameObject.speed);\n  if (\n    gameObject.position.x >= gameObject.gameWidth - gameObject.width ||\n    gameObject.position.x <= 0\n  ) {\n    steps = -steps;\n    gameObject.speed = -gameObject.speed;\n  }\n  const prevAngle = angle;\n  angle = nextAngle(angle, steps);\n  gameObject.vector.x =\n    swingWidth * (Math.cos(prevAngle) - Math.cos(angle)) + gameObject.speed;\n};\n\nconst nextAngle = (angle, steps) =>\n  angle < 2 * Math.PI ? angle + (2 * Math.PI) / steps : angle - 2 * Math.PI;\n\n\n//# sourceURL=webpack:///./src/movement.js?");

/***/ }),

/***/ "./src/particle.js":
/*!*************************!*\
  !*** ./src/particle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Particle; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass Particle {\n  constructor(\n    game,\n    position,\n    radius,\n    lifeLength = 20,\n    color = \"255, 255, 255\"\n  ) {\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    this.position = { x: position.x, y: position.y };\n    this.speed = 20 * Math.random();\n    this.vector = {\n      x: this.speed * (Math.random() - 0.5),\n      y: this.speed * (Math.random() - 0.5),\n    };\n    this.opacity = 1;\n    this.lifeLength = lifeLength;\n    this.radius = radius * Math.random();\n    this.color = color;\n    this.delete = false;\n  }\n\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(\n      this.position.x,\n      this.position.y,\n      this.radius,\n      0,\n      2 * Math.PI,\n      false\n    );\n    ctx.fillStyle = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"rgbaToString\"])(this.color, this.opacity);\n    ctx.fill();\n  }\n\n  update(deltaTime) {\n    this.position.x += this.vector.x;\n    this.position.y += this.vector.y;\n    this.opacity = this.opacity - 1 / this.lifeLength;\n    if (this.opacity <= 0) {\n      this.opacity = 0;\n      this.delete = true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/particle.js?");

/***/ }),

/***/ "./src/rocket.js":
/*!***********************!*\
  !*** ./src/rocket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rocket; });\nclass Rocket {\n  constructor(game) {\n    this.gameWidth = game.gameWidth;\n\n    this.image = game.assets.images.rocket;\n    this.width = 16;\n    this.height = 16;\n    this.maxSpeed = 4;\n    this.speed = 0;\n    this.position = {\n      x: game.gameWidth / 2 - this.width / 2,\n      y: game.gameHeight - this.height - 16,\n    };\n    this.delete = false;\n  }\n\n  moveLeft() {\n    this.speed = -this.maxSpeed;\n  }\n\n  moveRight() {\n    this.speed = this.maxSpeed;\n  }\n\n  stop() {\n    this.speed = 0;\n  }\n\n  draw(ctx) {\n    if (this.isExploding) return;\n    ctx.drawImage(\n      this.image,\n      this.position.x,\n      this.position.y,\n      this.width,\n      this.height\n    );\n  }\n\n  update(deltaTime) {\n    this.position.x += this.speed;\n\n    if (this.position.x < 0) this.position.x = 0;\n\n    if (this.position.x + this.width > this.gameWidth)\n      this.position.x = this.gameWidth - this.width;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/rocket.js?");

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