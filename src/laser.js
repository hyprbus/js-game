export default class Laser {
  constructor(game) {
    this.image = game.assets.images.laser;
    this.sound = game.assets.sounds[1];
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.width = 4;
    this.height = 16;
    this.position = { x: 400, y: 550 };
    this.isShooting = false;
    this.reset();
  }

  reset() {
    this.position = { x: 400, y: 550 };
    this.speed = { x: 0, y: -4 };
    this.isShooting = false;
  }

  fire() {
    if (this.isShooting) return;
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

    /*
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
    */
  }
}
