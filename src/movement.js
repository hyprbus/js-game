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

export function alienBossMovement(gameObject) {
  gameObject.vector.y = gameObject.speed;

  if (gameObject.position.x >= gameObject.gameWidth - gameObject.width) {
    gameObject.vector.x = -gameObject.speed;
    return;
  }
  if (gameObject.position.x <= 0) {
    gameObject.vector.x = gameObject.speed;
    return;
  }
  if (Math.random() < 0.03) gameObject.vector.x = -gameObject.vector.x;
}
