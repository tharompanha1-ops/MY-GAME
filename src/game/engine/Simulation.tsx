import { useFrame } from '@react-three/fiber'
import { useMemo } from 'react'
import { FixedStepLoop } from '@/game/core/FixedStepLoop'
import { world } from '@/game/core/world'

/** Bridges the render loop to the fixed-step gameplay loop. Systems register here in later phases. */
export function Simulation() {
  const loop = useMemo(
    () =>
      new FixedStepLoop((dt, tick) => {
        world.tick = tick
        world.elapsed += dt
      }),
    [],
  )
  useFrame((_, delta) => {
    loop.advance(delta)
  })
  return null
}
