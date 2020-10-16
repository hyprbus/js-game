export function detectCollision(source, target) {
  let bottomOfSource = source.position.y + source.height;
  let topOfSource = source.position.y;

  let topOfTarget = target.position.y;
  let leftSideOfTarget = target.position.x;
  let rightSideOfTarget = target.position.x + target.width;
  let bottomOfTarget = target.position.y + target.height;

  // fix collision detection, not right! Should be when they touch, isn't now.
  if (
    bottomOfSource >= topOfTarget &&
    topOfSource <= bottomOfTarget &&
    source.position.x >= leftSideOfTarget &&
    source.position.x + source.width <= rightSideOfTarget
  ) {
    return true;
  } else {
    return false;
  }
}
