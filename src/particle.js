import { rgbaToString } from "./utils";

export default class Particle {
  constructor(game, position, radius, lifeLength = 20) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.position = { x: position.x, y: position.y };
    this.speed = 20 * Math.random();
    this.vector = {
      x: this.speed * (Math.random() - 0.5),
      y: this.speed * (Math.random() - 0.5),
    };
    this.opacity = 1;
    this.lifeLength = lifeLength;
    this.radius = radius * Math.random();
    this.color = "255, 255, 255";
    this.delete = false;
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
    this.opacity = this.opacity - 1 / this.lifeLength;
    if (this.opacity <= 0) {
      this.opacity = 0;
      this.delete = true;
    }
  }
}
