# LASER SHOOTER

## ideas

- if you pick treasures, your shot moves faster

## todo

- finish game screen when all levels won
- alien boss at end of each level
- animate rocket on turn left / right
- animate aliens

### refactor & bugs

- extract game state into separate logic?
- game objects super class: width, height, game, position: { x, y }
- fast shot will skip over aliens: how to fix?

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
- particles as explosion object, also replace alien explosion in game
- sound loading returns object the same way as image loading
