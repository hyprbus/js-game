import Alien from "./alien";
import { alienMovement, alienBossMovement } from "./movement";
import { ALIENTYPE } from "./constants";

const level0 = [[1, 0, 1, 0, 1]];

const level1 = [[0, 0, 2], [0], [1, 1, 1, 1, 1]];

const level2 = [
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
];

const level3 = [
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

const level4 = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

const level5 = [
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const level6 = [[0, 2, 0, 0, 2, 0, 0, 2], [0], [0, 0, 2, 0, 0, 2]];

export const levels = [level0, level1, level2, level3, level4, level5, level6];

export function buildLevel(game, level) {
  let aliens = [];
  level.forEach((row, rowIndex) => {
    row.forEach((alien, alienIndex) => {
      let position = {
        x: 16 + 32 * alienIndex,
        y: 16 + 32 * rowIndex,
      };
      const id = (rowIndex + 1) * 10 + alienIndex;
      if (alien === 1) {
        aliens.push(
          new Alien({
            ID: id,
            alienType: ALIENTYPE.NORMAL,
            game: game,
            position: position,
            imageKey: "alien",
            width: 16,
            height: 16,
            initVector: {
              x: game.gameSpeed,
              y: 0,
            },
            hitScore: 100,
            spriteAnimationOrder: [0, 1],
            movementAlgorithm: alienMovement,
          })
        );
      }
      if (alien === 2) {
        aliens.push(
          new Alien({
            ID: id,
            alienType: ALIENTYPE.BOSS,
            game: game,
            position: position,
            imageKey: "alienBoss",
            width: 32,
            height: 32,
            initVector: {
              x: game.gameSpeed,
              y: 0,
            },
            hitScore: 500,
            spriteAnimationOrder: [0, 1],
            movementAlgorithm: alienBossMovement({
              angle: 0,
              steps: 120,
              swingWidth: 80,
            }),
          })
        );
      }
    });
  });

  return aliens;
}
