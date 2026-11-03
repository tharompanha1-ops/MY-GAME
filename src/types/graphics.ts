export type GraphicsPreset = 'low' | 'medium' | 'high' | 'ultra'

export interface GraphicsQuality {
  shadows: boolean
  shadowMapSize: number
  dpr: [number, number]
  antialias: boolean
  /** 0..1 multiplier for particle budgets (used from the VFX phase). */
  effects: number
}
