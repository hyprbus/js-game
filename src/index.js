import { loadImages } from "./loadImages";
import { loadSounds } from "./loadSounds";
import { createGameCanvas } from "./createGameCanvas";
// import { runGame } from "./runGame";
import Game from "./game";

const imagesFolder = "images";
const imageFiles = ["bk.png", "ground.png", "rocket.png"];
const soundsFolder = "audio";
const soundFiles = ["game.mp3"];
const gameCanvasId = "ctx";
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const ctx = createGameCanvas(gameCanvasId, GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

const initAndRunGame = async () => {
  try {
    const images = await loadImages(
      imageFiles.map((image) => imagesFolder + "/" + image)
    );
    const sounds = await loadSounds(
      soundFiles.map((sound) => soundsFolder + "/" + sound)
    );
    const assets = { images: images, sounds: sounds };
    let game = new Game(GAME_WIDTH, GAME_HEIGHT, assets);
    function gameLoop(timestamp) {
      let deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      game.update(deltaTime);
      game.draw(ctx);

      requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop);
  } catch (err) {
    console.error("Could not initialize and run game:", err);
  }
};

initAndRunGame();
