// get array of image objects (name and url), return object with image keys and image files

const loadImage = (imageData) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const imageID = Object.keys(imageData)[0];
    img.addEventListener("load", () => resolve({ [imageID]: img }));
    img.addEventListener("error", reject);
    img.src = imageData[imageID];
  });

const loadSound = (soundData) =>
  new Promise((resolve, reject) => {
    const sound = new Audio();
    const soundID = Object.keys(soundData)[0];
    sound.addEventListener("loadeddata", () => resolve({ [soundID]: sound }));
    sound.addEventListener("error", reject);
    sound.src = soundData[soundID];
  });

const loadAssets = (loadFunction) => async (imagesData) => {
  try {
    const imageArray = await Promise.all(
      imagesData.map((urlObj) => loadFunction(urlObj))
    );
    let images = {};
    imageArray.forEach(
      (image) => (images[Object.keys(image)[0]] = image[Object.keys(image)[0]])
    );
    return images;
  } catch (err) {
    console.error("error loading image assets");
  }
};

export const loadImages = loadAssets(loadImage);
export const loadSounds = loadAssets(loadSound);
