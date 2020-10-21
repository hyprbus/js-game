// import { detectCollision } from "./collisionDetection";

export default class Background {
  constructor(game, img) {
    this.image = img;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.size = { x: this.gameWidth, y: this.gameHeight };
    this.reset();
  }

  reset() {
    this.position = { x: 0, y: 0 };
    this.speed = { x: 0, y: 2 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y - this.gameHeight,
      this.size.x,
      this.size.y
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.y >= this.gameHeight) {
      this.position.y = 0;
    }
  }
}
