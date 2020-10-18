# LASER SHOOTER

## ideas

- if you pick treasures, your shot moves faster

## todo

- finish game screen when all levels won
- animate rocket on turn left / right

### refactor & bugs

- game objects super class: width, height, game, position: { x, y }
- sound loading returns object the same way as image loading
- particles as explosion object, also replace alien explosion in game

### tooling

- eslint and prettier
- yarn:build moves static files from src to build
- autobuild files on change with webpack dev server

### done

- fix collision detection
- restart game after game over
- prevent fire if not in play mode
- explosion particle effect
- score counter
- lives counter
- how to reset after life lost
- levels
