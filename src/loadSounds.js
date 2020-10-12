const loadSound = (url) =>
  new Promise((resolve, reject) => {
    const sound = new Audio();
    sound.addEventListener("loadeddata", () => resolve(sound));
    sound.addEventListener("error", reject);
    sound.src = url;
  });

export const loadSounds = async (urls) => {
  try {
    return await Promise.all(urls.map((url) => loadSound(url)));
  } catch (err) {
    console.log("error loading audio assets");
  }
};
