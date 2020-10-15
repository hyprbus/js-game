export default class InputHandler {
  constructor(rocket, game) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          rocket.moveLeft();
          break;

        case 39:
          rocket.moveRight();
          break;

        case 27:
          game.togglePause();
          break;

        case 32:
          game.start();
          console.log("start...");
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          if (rocket.speed < 0) rocket.stop();
          break;

        case 39:
          if (rocket.speed > 0) rocket.stop();
          break;
      }
    });
  }
}
