import Alien from "./alien";

const level0 = [[1]];

const level1 = [[1, 1, 1, 1, 1]];

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

export const levels = [level0, level1, level2, level3, level4];

export function buildLevel(game, level) {
  let aliens = [];
  level.forEach((row, rowIndex) => {
    row.forEach((alien, alienIndex) => {
      if (alien === 1) {
        let position = {
          x: 16 + 32 * alienIndex,
          y: 16 + 32 * rowIndex,
        };
        aliens.push(new Alien(game, position));
      }
    });
  });

  return aliens;
}
