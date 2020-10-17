import { rgbaToString } from "./utils";

export default class Particle {
  constructor(game, position) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.width = 4;
    this.height = 16;
    this.position = { x: position.x, y: position.y };
    this.speed = 20 * Math.random();
    this.vector = {
      x: this.speed * (Math.random() - 0.5),
      y: this.speed * (Math.random() - 0.5),
    };
    this.opacity = 1;
    this.lifeLength = 20;
    this.radius = 10 * Math.random();
    this.color = "255, 255, 255";
    this.markedForDeletion = false;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fillStyle = rgbaToString(this.color, this.opacity);
    ctx.fill();
  }

  update(deltaTime) {
    this.position.x += this.vector.x;
    this.position.y += this.vector.y;
    this.opacity = this.opacity - this.opacity / this.lifeLength;
    if (this.opacity <= 0) {
      this.opacity = 0;
      this.markedForDeletion = true;
    }
  }
}
