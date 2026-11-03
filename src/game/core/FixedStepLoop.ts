/**
 * Fixed-timestep simulation clock.
 * Gameplay runs at a constant step regardless of render FPS. `timeScale`
 * drives hit-stop (near 0) and ultimate slow-motion (below 1) later on.
 */
export type StepCallback = (dt: number, tick: number) => void

export class FixedStepLoop {
  tick = 0
  timeScale = 1
  private accumulator = 0

  constructor(
    private readonly onStep: StepCallback,
    readonly step = 1 / 60,
    readonly maxSubSteps = 5,
  ) {}

  /** Feed the real frame delta (seconds). Returns the render interpolation alpha in [0,1). */
  advance(frameDelta: number): number {
    const scaled = Math.max(0, frameDelta) * this.timeScale
    // Clamp so a long stall (tab switch) cannot trigger a spiral of death.
    this.accumulator += Math.min(scaled, this.step * this.maxSubSteps)

    let steps = 0
    while (this.accumulator >= this.step - 1e-9 && steps < this.maxSubSteps) {
      this.onStep(this.step, this.tick++)
      this.accumulator -= this.step
      steps++
    }
    if (this.accumulator < 0) this.accumulator = 0
    return this.accumulator / this.step
  }

  reset(): void {
    this.tick = 0
    this.accumulator = 0
  }
}
