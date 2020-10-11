import { loadImages } from "./loadImages";

const canvas = document.createElement("canvas");
canvas.setAttribute("id", "gamecanvas");
const ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 300;
document.body.appendChild(canvas);

const imagesFolder = "images";
const imageFiles = ["bk.png", "ground.png"];

const loadAssets = async () => {
  try {
    const images = await loadImages(
      imageFiles.map((image) => imagesFolder + "/" + image)
    );
    return images;
  } catch (err) {
    console.error("Could not load fukcing image");
  }
};

loadAssets()
  .then((imgs) => {
    const ground = imgs[0];
    ctx.drawImage(ground, 0, 0);
  })
  .catch((err) => console.log(err));

/*
loadImage("images/ground.png")
  .then((ground) => {
    var imgwidth = ground.width;
    var imgheight = ground.height;
    canvas.width = imgwidth * 2;
    canvas.height = imgheight * 2;
    ctx.scale(2, 2);
    ctx.drawImage(ground, 1, 1);
  })
  .catch((err) =>
    console.log(
      "Error loading image",
      console.error(err.name + ": " + err.message)
    )
  );
*/
