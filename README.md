# LASER SHOOTER

## ideas

- if you pick treasures, your shot moves faster

## features

- keep animations rolling after game over
- alien boss at end of each level
- music handling: fade out at selected state changes, restart when new game

### bugs

- fast shot will skip over aliens: how to fix?

### refactor

- extract game state into separate logic?
- extract gameObject into superclass

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
- scale images without antialiasing
- animate aliens
- finish game screen when all levels won
- play music on start
- aliens cannot move horisontally if too low to avoid unavoidable deaths of rocket
- aliens always move downwards if outside screen
- remove rocket if game over, keep animation running
- do not reset lives and score when game over, only on game start
- do not switch levels until no alien explosions
