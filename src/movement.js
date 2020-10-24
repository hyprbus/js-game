export function alienMovement(gameObject) {
  if (gameObject.position.x >= gameObject.gameWidth - gameObject.width) {
    gameObject.vector.x = -gameObject.speed;
    gameObject.vector.y = Math.round(Math.random()) * gameObject.speed;
  }

  if (gameObject.position.x <= 0) {
    gameObject.vector.x = gameObject.speed;
    gameObject.vector.y = Math.round(Math.random()) * gameObject.speed;
  }

  if (
    gameObject.position.y > gameObject.gameHeight - 50 ||
    gameObject.position.y < 0
  )
    gameObject.vector.y = gameObject.speed;
}

export const alienBossMovement = ({ angle, steps, swingWidth }) => (
  gameObject
) => {
  gameObject.vector.y = Math.abs(gameObject.speed);
  if (
    gameObject.position.x >= gameObject.gameWidth - gameObject.width ||
    gameObject.position.x <= 0
  ) {
    steps = -steps;
    gameObject.speed = -gameObject.speed;
  }
  const prevAngle = angle;
  angle = nextAngle(angle, steps);
  gameObject.vector.x =
    swingWidth * (Math.cos(prevAngle) - Math.cos(angle)) + gameObject.speed;
};

const nextAngle = (angle, steps) =>
  angle < 2 * Math.PI ? angle + (2 * Math.PI) / steps : angle - 2 * Math.PI;
