import { detectCollision } from "./detectCollision";

export default class Alien {
  constructor(game, position) {
    this.image = game.assets.images.alien;
    this.sound = game.assets.sounds[2];
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.width = 16;
    this.height = 16;
    this.position = { x: position.x, y: position.y };
    this.speed = game.gameSpeed;
    this.vector = { x: this.speed, y: 0 };
    this.markedForDeletion = false;
    this.hitScore = 100;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    if (detectCollision(this.game.rocket, this)) {
      this.game.rocketHitByAlien();
    }

    if (this.game.laser.isShooting && detectCollision(this.game.laser, this)) {
      this.sound.pause();
      this.sound.currentTime = 0;
      this.sound.play();
      this.markedForDeletion = true;
      this.game.score = this.game.score + this.hitScore;
      this.game.laser.reset();
    }

    this.position.x += this.vector.x;
    this.position.y += this.vector.y;

    if (this.position.y > this.gameHeight) {
      this.position.y = -20;
    }

    if (this.position.x >= this.gameWidth - this.width) {
      this.vector.x = -this.speed;
      this.vector.y = Math.random() * this.speed;
    }

    if (this.position.x <= 0) {
      this.vector.x = this.speed;
      this.vector.y = Math.random() * this.speed;
    }
  }
}
