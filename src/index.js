import { loadImages } from "./loadImages";
import { loadSounds } from "./loadSounds";
import { createGameCanvas } from "./createGameCanvas";
import { runGame } from "./runGame";

const imagesFolder = "images";
const imageFiles = ["bk.png", "ground.png"];
const soundsFolder = "audio";
const soundFiles = ["game.mp3"];

const initAndRunGame = async () => {
  try {
    const canvasReference = createGameCanvas();
    const images = await loadImages(
      imageFiles.map((image) => imagesFolder + "/" + image)
    );
    const sounds = await loadSounds(
      soundFiles.map((sound) => soundsFolder + "/" + sound)
    );
    const assets = { images: images, sounds: sounds };
    runGame(canvasReference, assets);
  } catch (err) {
    console.error("Could not initialize and run game:", err);
  }
};

document.getElementById("body").addEventListener("click", initAndRunGame);
// initAndRunGame();
