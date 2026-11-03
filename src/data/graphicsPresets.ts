import type { GraphicsPreset, GraphicsQuality } from '@/types/graphics'

export const GRAPHICS_PRESETS: Record<GraphicsPreset, GraphicsQuality> = {
  low: { shadows: false, shadowMapSize: 512, dpr: [0.75, 1], antialias: false, effects: 0.25 },
  medium: { shadows: true, shadowMapSize: 1024, dpr: [1, 1], antialias: false, effects: 0.5 },
  high: { shadows: true, shadowMapSize: 2048, dpr: [1, 1.5], antialias: true, effects: 0.8 },
  ultra: { shadows: true, shadowMapSize: 4096, dpr: [1, 2], antialias: true, effects: 1 },
}
