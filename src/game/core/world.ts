/** Mutable simulation state. Lives outside React; systems read/write it directly. */
export interface World {
  tick: number
  elapsed: number
}

export const world: World = { tick: 0, elapsed: 0 }
