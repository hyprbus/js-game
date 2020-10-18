import Rocket from "./rocket";
import Background from "./background";
import InputHandler from "./input";
import Laser from "./laser";
import Particle from "./particle";
import { levels, buildLevel } from "./levels";
import { GAMESTATE, LIVES } from "./constants";
import Explosion from "./explosion";

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
    this.lives = LIVES;
    this.aliens = [];
    this.alienExplosions = [];
    this.rocketExplosion = null;
    this.level = 0;
    this.score = 0;

    new InputHandler(this.rocket, this.laser, this);
  }

  reset() {
    this.level = 0;
    this.lives = LIVES;
    this.score = 0;
    this.alienExplosions = [];
    this.rocketExplosion = null;
    this.rocket.delete = false;
  }

  start() {
    if (
      this.gamestate !== GAMESTATE.MENU &&
      this.gamestate !== GAMESTATE.NEWLEVEL &&
      this.gamestate !== GAMESTATE.GAMEOVER
    )
      return;

    if (this.gamestate === GAMESTATE.GAMEOVER) {
      this.reset();
    }

    this.aliens = buildLevel(this, levels[this.level]);
    this.gameObjects = [this.background, this.rocket, this.laser];

    this.gamestate = GAMESTATE.RUNNING;
  }

  rocketHitByAlien() {
    const deathSound = this.assets.sounds[3];
    deathSound.pause();
    deathSound.currentTime = 0;
    deathSound.play();
    this.lives--;
    this.laser.reset();
    this.rocket.delete = true;
    this.rocketExplosion = new Explosion(
      this,
      this.rocket.position,
      8,
      80,
      100
    );
    this.gameObjects.push(this.rocketExplosion);
    this.aliens.forEach((alien) => {
      alien.position.y = -600;
    });
  }

  update(deltaTime) {
    if (this.lives === 0) {
      this.reset();
      this.gamestate = GAMESTATE.GAMEOVER;
    }

    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
    )
      return;

    if (this.aliens.length === 0) {
      this.level++;
      this.gamestate = GAMESTATE.NEWLEVEL;
      this.start();
    }

    [
      ...this.gameObjects,
      ...this.aliens,
      ...this.alienExplosions,
    ].forEach((object) => object.update(deltaTime));

    this.alienExplosions = this.alienExplosions.filter(
      (particle) => !particle.delete
    );

    this.gameObjects = this.gameObjects.filter(
      (gameObject) => !gameObject.delete
    );

    if (this.rocketExplosion && this.rocketExplosion.delete) {
      this.rocketExplosion = null;
      this.rocket.delete = false;
      this.gameObjects.push(this.rocket);
    }

    this.aliens.forEach((alien) => {
      if (alien.delete) {
        for (let i = 0; i < 10; i++) {
          this.alienExplosions.push(new Particle(this, alien.position, 20, 30));
        }
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
      ctx.font = "20px Courier";
      ctx.fillStyle = "yellow";
      ctx.textAlign = "left";
      ctx.fillText(
        `Lives: ${this.lives} Score: ${this.score} Level: ${this.level}`,
        16,
        32
      );
    }

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
      ctx.fillText(
        "Press ENTER To Start",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
    }
    if (this.gamestate === GAMESTATE.GAMEOVER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
      ctx.fillText(
        "Press ENTER to play again",
        this.gameWidth / 2,
        this.gameHeight / 2 + 40
      );
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
