import Rocket from "./rocket";
import Background from "./background";
import InputHandler from "./input";
import Laser from "./laser";
import { buildLevel } from "./levels";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4,
};

export default class Game {
  constructor(gameWidth, gameHeight, assets) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.MENU;
    this.gameSpeed = 5;
    this.assets = assets;
    this.rocket = new Rocket(this);
    this.laser = new Laser(this);
    this.background = new Background(this, assets.images.background);
    this.gameObjects = [];
    this.lives = 3;
    this.aliens = [];

    // this.levels = [level1, level2];
    // this.currentLevel = 0;

    new InputHandler(this.rocket, this.laser, this);
  }

  start() {
    if (
      this.gamestate !== GAMESTATE.MENU &&
      this.gamestate !== GAMESTATE.NEWLEVEL
    )
      return;
    this.aliens = buildLevel(this);
    console.log(this.aliens);
    this.gameObjects = [this.background, this.rocket, this.laser];

    this.gamestate = GAMESTATE.RUNNING;
  }

  subtractLife() {
    const deathSound = this.assets.sounds[3];
    deathSound.pause();
    deathSound.currentTime = 0;
    deathSound.play();
    this.lives = 0;
  }

  update(deltaTime) {
    if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;

    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
    )
      return;
    [...this.gameObjects, ...this.aliens].forEach((object) =>
      object.update(deltaTime)
    );

    this.aliens = this.aliens.filter((alien) => !alien.markedForDeletion);
  }

  draw(ctx) {
    [...this.gameObjects, ...this.aliens].forEach((object) => object.draw(ctx));

    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
    }

    if (this.gamestate === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();

      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Press ENTER To Start", this.gameWidth / 2, 20);
    }
    if (this.gamestate === GAMESTATE.GAMEOVER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
    }
  }

  togglePause() {
    if (this.gamestate == GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}
