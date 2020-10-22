import { detectCollision } from "./detectCollision";

export default class Alien {
  constructor({
    game,
    position,
    imageKey,
    width,
    height,
    initVector,
    hitScore,
    spriteAnimationOrder,
    movementAlgorithm,
  }) {
    this.image = game.assets.images[imageKey];
    this.sound = game.assets.sounds.explosion;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.width = width;
    this.height = height;
    this.position = { ...position };
    this.speed = game.gameSpeed;
    this.vector = { ...initVector };
    this.delete = false;
    this.hitScore = hitScore;
    this.sprites = spriteAnimationOrder;
    this.spriteIndex = 0;
    this.animationRate = 10;
    this.animationRateCounter = 0;
    this.movementAlgorithm = movementAlgorithm;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.sprites[this.spriteIndex] * this.width,
      0,
      this.width,
      this.height,
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
      this.delete = true;
      this.game.score = this.game.score + this.hitScore;
      this.game.laser.reset();
    }

    this.position.x += this.vector.x;
    this.position.y += this.vector.y;

    if (this.position.y > this.gameHeight) {
      this.position.y = -20;
    }

    this.movementAlgorithm(this);

    this.animationRateCounter++;
    if (this.animationRateCounter === this.animationRate) {
      this.animationRateCounter = 0;
      this.spriteIndex++;
      if (this.spriteIndex === this.sprites.length) this.spriteIndex = 0;
    }
  }
}
