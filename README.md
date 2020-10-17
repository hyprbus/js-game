# LASER SHOOTER

## ideas

- if you pick treasures, your shot moves faster

## todo

- levels
- animate rocket on turn left / right
- score counter
- lives counter
- how to reset after life lost

### refactor & bugs

- game objects super class: width, height, game, position: { x, y }
- sound loading returns object the same way as image loading

### tooling

- eslint and prettier
- yarn:build moves static files from src to build
- autobuild files on change with webpack dev server

### done

- fix collision detection
- restart game after game over
- prevent fire if not in play mode
- explosion particle effect
