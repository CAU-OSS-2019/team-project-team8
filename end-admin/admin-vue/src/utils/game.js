const gameType = new Map()
gameType.set('max', 1)
gameType.set('sbobet', 2)
gameType.set('fantasy', 3)

export function getGameType(gameName) {
  return gameType.get(gameName.toLocaleLowerCase())
}

export default {
  getGameType
}
