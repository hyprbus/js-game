import { loadImages, loadSounds } from "./loadAssets";
import { createGameCanvas } from "./createGameCanvas";
import Game from "./game";

const imageFiles = [
  { background: "images/bk.png" },
  { rocket: "images/rocket.png" },
  { laser: "images/laser.png" },
  { alien: "images/alien.png" },
];
const soundFiles = [
  { soundtrack: "audio/game.mp3" },
  { laser: "audio/laser.mp3" },
  { explosion: "audio/explosion.mp3" },
  { death: "audio/death.mp3" },
];
const gameCanvasId = "ctx";
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const ctx = createGameCanvas(gameCanvasId, GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

const initAndRunGame = async () => {
  try {
    const images = await loadImages(imageFiles);
    const sounds = await loadSounds(soundFiles);
    const assets = { images: images, sounds: sounds };
    let game = new Game(GAME_WIDTH, GAME_HEIGHT, assets);
    const gameLoop = (ctx) => (timestamp) => {
      let deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      game.update(deltaTime);
      game.draw(ctx);
      requestAnimationFrame(gameLoop(ctx));
    };
    requestAnimationFrame(gameLoop(ctx));
  } catch (err) {
    console.error("Could not initialize and run game:", err);
  }
};

initAndRunGame();
