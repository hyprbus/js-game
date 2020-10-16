import Alien from "./alien";

export function buildLevel(game) {
  let aliens = [];
  const level = [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
  ];
  level.forEach((row, rowIndex) => {
    row.forEach((alien, alienIndex) => {
      if (alien === 1) {
        let position = {
          x: 10 + 32 * alienIndex,
          y: 10 + 32 * rowIndex,
        };
        console.log(position);
        aliens.push(new Alien(game, position));
      }
    });
  });

  return aliens;
}
