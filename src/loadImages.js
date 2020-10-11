const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", reject);
    img.src = url;
  });

export const loadImages = async (urls) => {
  try {
    return await Promise.all(urls.map((url) => loadImage(url)));
  } catch (err) {
    console.log("error loading image assets");
  }
};
