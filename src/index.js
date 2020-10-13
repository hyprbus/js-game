import { loadImages } from "./loadImages";
import { loadSounds } from "./loadSounds";
import { createGameCanvas } from "./createGameCanvas";
import { runGame } from "./runGame";

const imagesFolder = "images";
const imageFiles = ["bk.png", "ground.png"];
const soundsFolder = "audio";
const soundFiles = ["game.mp3"];
const gameCanvasId = "ctx";

const initAndRunGame = async () => {
  try {
    const ctx = createGameCanvas(gameCanvasId);
    window.onload = function () {
      ctx.font = "20px VT323";
      ctx.fillText("Click to start game", 20, 20);
      ctx.stroke();
    };

    const images = await loadImages(
      imageFiles.map((image) => imagesFolder + "/" + image)
    );
    const sounds = await loadSounds(
      soundFiles.map((sound) => soundsFolder + "/" + sound)
    );
    const assets = { images: images, sounds: sounds };
    document
      .getElementById(gameCanvasId)
      .addEventListener("click", () => runGame(ctx, assets));
  } catch (err) {
    console.error("Could not initialize and run game:", err);
  }
};

initAndRunGame();
