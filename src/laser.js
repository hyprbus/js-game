import { GAMESTATE } from "./constants";

export default class Laser {
  constructor(game) {
    this.image = game.assets.images.laser;
    this.sound = game.assets.sounds.laser;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.width = 4;
    this.height = 16;
    this.position = { x: 400, y: 550 };
    this.isShooting = false;
    this.reset();
    this.speed = { x: 0, y: -8 };
    this.velocity;
  }

  reset() {
    this.position = { x: 400, y: 550 };
    this.isShooting = false;
  }

  fire() {
    if (
      this.isShooting ||
      this.game.gamestate != GAMESTATE.RUNNING ||
      this.game.rocket.isExploding
    )
      return;
    this.position.x =
      this.game.rocket.position.x + this.game.rocket.width / 2 - this.width / 2;
    this.position.y = this.game.rocket.position.y - this.height;
    this.sound.pause();
    this.sound.currentTime = 0;
    this.sound.play();
    this.isShooting = true;
  }

  draw(ctx) {
    if (!this.isShooting) return;
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    if (!this.isShooting) return;
    this.position.y += this.speed.y;

    if (this.position.y < 0) {
      this.reset();
    }
  }
}
