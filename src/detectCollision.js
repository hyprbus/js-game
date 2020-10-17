export function detectCollision(source, target) {
  let topOfSource = source.position.y;
  let leftSideOfSource = source.position.x;
  let rightSideOfSource = source.position.x + source.width;
  let bottomOfSource = source.position.y + source.height;

  let topOfTarget = target.position.y;
  let leftSideOfTarget = target.position.x;
  let rightSideOfTarget = target.position.x + target.width;
  let bottomOfTarget = target.position.y + target.height;

  // fix collision detection, not right! Should be when they touch, isn't now.
  if (
    bottomOfSource > topOfTarget &&
    topOfSource < bottomOfTarget &&
    rightSideOfSource > leftSideOfTarget &&
    leftSideOfSource < rightSideOfTarget
  ) {
    return true;
  } else {
    return false;
  }
}
