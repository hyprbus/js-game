import Particle from "./particle";

export default class Explosion {
  constructor(
    game,
    position,
    radius = 10,
    lifeLength = 20,
    noOfParticles = 8,
    color = "255, 255, 255"
  ) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.particles = [];
    this.createParticles(
      game,
      position,
      radius,
      lifeLength,
      noOfParticles,
      color
    );
    this.delete = false;
  }

  createParticles(game, position, radius, lifeLength, noOfParticles, color) {
    for (let i = 0; i < noOfParticles; i++) {
      this.particles.push(
        new Particle(this.game, position, radius, lifeLength, color)
      );
    }
  }

  draw(ctx) {
    this.particles.forEach((particle) => particle.draw(ctx));
  }

  update(deltaTime) {
    this.particles = this.particles.filter((particle) => !particle.delete);
    if (this.particles.length === 0) {
      this.delete = true;
    }
    this.particles.forEach((particle) => particle.update(deltaTime));
  }
}
