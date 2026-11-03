import { describe, expect, it } from 'vitest'
import { FixedStepLoop } from '@/game/core/FixedStepLoop'

const make = () => {
  const ticks: number[] = []
  const loop = new FixedStepLoop((_dt, tick) => ticks.push(tick))
  return { loop, ticks }
}

describe('FixedStepLoop', () => {
  it('runs exactly one step per 1/60s', () => {
    const { loop, ticks } = make()
    loop.advance(1 / 60)
    expect(ticks).toEqual([0])
  })
  it('accumulates partial frames', () => {
    const { loop, ticks } = make()
    loop.advance(1 / 120)
    expect(ticks).toHaveLength(0)
    loop.advance(1 / 120)
    expect(ticks).toHaveLength(1)
  })
  it('runs multiple steps on a slow frame', () => {
    const { loop, ticks } = make()
    loop.advance(3 / 60)
    expect(ticks).toHaveLength(3)
  })
  it('clamps long stalls to maxSubSteps', () => {
    const { loop, ticks } = make()
    loop.advance(5)
    expect(ticks).toHaveLength(loop.maxSubSteps)
  })
  it('timeScale 0 freezes the simulation (hit-stop)', () => {
    const { loop, ticks } = make()
    loop.timeScale = 0
    loop.advance(1)
    expect(ticks).toHaveLength(0)
  })
  it('timeScale 0.5 halves the step rate (slow-motion)', () => {
    const { loop, ticks } = make()
    loop.timeScale = 0.5
    for (let i = 0; i < 60; i++) loop.advance(1 / 60)
    expect(ticks.length).toBe(30)
  })
})
