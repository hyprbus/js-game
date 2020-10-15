export const runGame = (ctx, assets) => {
  const bkg = assets.images[0];
  const rocket = assets.images[2];
  let imgHeight = 0;
  let scrollSpeed = 0.5;

  const music = assets.sounds[0];
  music.loop = true;
  music.play();

  function loop() {
    ctx.drawImage(bkg, 0, imgHeight);
    ctx.drawImage(bkg, 0, imgHeight - 300);
    imgHeight += scrollSpeed;
    if (imgHeight >= 300) imgHeight = 0;

    ctx.drawImage(rocket, 142, 260);
    window.requestAnimationFrame(loop);
  }

  loop();
};
