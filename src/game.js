import Rocket from "./rocket";
import Background from "./background";
import InputHandler from "./input";
import Laser from "./laser";
import { levels, buildLevel } from "./levels";
import { GAMESTATE, LIVES } from "./constants";
import Explosion from "./explosion";

export default class Game {
  constructor(gameWidth, gameHeight, assets) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.MENU;
    this.gameSpeed = 2;
    this.assets = assets;
    this.rocket = new Rocket(this);
    this.laser = new Laser(this);
    this.background = new Background(this, assets.images.background);
    this.gameObjects = [];
    this.lives = LIVES;
    this.aliens = [];
    this.alienExplosions = [];
    this.rocketExplosion = null;
    this.level = 0;
    this.score = 0;
    this.music = this.assets.sounds.soundtrack;
    this.musicIsPlaying = false;

    new InputHandler(this.rocket, this.laser, this);
  }

  reset() {
    this.level = 0;
    this.lives = LIVES;
    this.score = 0;
    this.gamestate = GAMESTATE.MENU;
  }

  startLevel() {
    this.alienExplosions = [];
    this.rocketExplosion = null;
    this.rocket.delete = false;
    this.aliens = buildLevel(this, levels[this.level]);
    this.gameObjects = [this.background, this.rocket, this.laser];
    this.gamestate = GAMESTATE.RUNNING;
  }

  startGame() {
    if (this.gamestate !== GAMESTATE.RUNNING) {
      this.reset();
      this.startLevel();
    }
    return;
  }

  rocketHitByAlien() {
    const deathSound = this.assets.sounds.death;
    deathSound.pause();
    deathSound.currentTime = 0;
    deathSound.volume = 0.4;
    deathSound.play();
    this.lives--;
    this.laser.reset();
    this.rocket.delete = true;
    this.rocketExplosion = new Explosion(
      this,
      this.rocket.position,
      8,
      80,
      100,
      "0, 255, 255"
    );
    this.gameObjects.push(this.rocketExplosion);
    this.aliens.forEach((alien) => {
      alien.position.y = -300;
    });
  }

  update(deltaTime) {
    if (this.lives === 0) {
      this.gamestate = GAMESTATE.GAMEOVER;
    }

    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU
    )
      return;

    if (this.musicIsPlaying === false) {
      this.musicIsPlaying = true;
      this.music.loop = true;
      this.music.volume = 1;
      this.music.play();
    }

    if (this.aliens.length === 0 && this.alienExplosions.length === 0) {
      if (this.level === levels.length - 1) {
        this.gamestate = GAMESTATE.WON;
      } else {
        this.level++;
        this.startLevel();
      }
    }

    [
      ...this.gameObjects,
      ...this.aliens,
      ...this.alienExplosions,
    ].forEach((object) => object.update(deltaTime));

    this.alienExplosions = this.alienExplosions.filter(
      (explosion) => !explosion.delete
    );

    this.gameObjects = this.gameObjects.filter(
      (gameObject) => !gameObject.delete
    );

    if (
      this.rocketExplosion &&
      this.rocketExplosion.delete &&
      this.gamestate !== GAMESTATE.GAMEOVER
    ) {
      this.rocketExplosion = null;
      this.rocket.delete = false;
      this.gameObjects.push(this.rocket);
    }

    this.aliens.forEach((alien) => {
      if (alien.delete) {
        this.alienExplosions.push(
          new Explosion(this, alien.position, 8, 30, 24, "255, 255, 0")
        );
      }
    });
    this.aliens = this.aliens.filter((alien) => !alien.delete);
  }

  draw(ctx) {
    [
      ...this.gameObjects,
      ...this.aliens,
      ...this.alienExplosions,
    ].forEach((object) => object.draw(ctx));

    if (this.gamestate !== GAMESTATE.MENU) {
      ctx.font = "12px Courier";
      ctx.fillStyle = "yellow";
      ctx.textAlign = "left";
      ctx.fillText(
        `Lives: ${this.lives} Score: ${this.score} Level: ${this.level}`,
        8,
        16
      );
    }

    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "20px Arial";
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
      ctx.fillText(
        "Press ENTER To Start",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
    }
    if (this.gamestate === GAMESTATE.GAMEOVER) {
      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
      ctx.fillText(
        "Press ENTER to play again",
        this.gameWidth / 2,
        this.gameHeight / 2 + 40
      );
    }

    if (this.gamestate === GAMESTATE.WON) {
      ctx.font = "20px Courier";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        "You won! Earth is saved.",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
    }
  }

  togglePause() {
    if (
      this.gamestate !== GAMESTATE.RUNNING &&
      this.gamestate !== GAMESTATE.PAUSED
    )
      return;
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
      this.musicIsPlaying = false;
      this.music.pause();
    }
  }
}
