// get array of image objects (name and url), return object with image keys and image files

const loadImage = (imageData) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const imageID = Object.keys(imageData)[0];
    img.addEventListener("load", () => resolve({ [imageID]: img }));
    img.addEventListener("error", reject);
    img.src = imageData[imageID];
  });

export const loadImages = async (imagesData) => {
  try {
    const imageArray = await Promise.all(
      imagesData.map((urlObj) => loadImage(urlObj))
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

// handle resolve of promise and making it into an object
