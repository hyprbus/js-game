export const runGame = (ctx, assets) => {
  const bkg = assets.images[0];

  let imgWidth = 0;
  let scrollSpeed = 0.5;

  const music = assets.sounds[0];
  music.loop = true;
  music.play();

  function loop() {
    ctx.drawImage(bkg, 0 - imgWidth, 0);
    ctx.drawImage(bkg, 300 - imgWidth, 0);
    imgWidth += scrollSpeed;
    if (imgWidth >= 300) imgWidth = 0;
    window.requestAnimationFrame(loop);
  }

  loop();
};
