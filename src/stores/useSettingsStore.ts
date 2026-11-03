import { create } from 'zustand'
import { GRAPHICS_PRESETS } from '@/data/graphicsPresets'
import type { GraphicsPreset, GraphicsQuality } from '@/types/graphics'

interface SettingsState {
  preset: GraphicsPreset
  quality: GraphicsQuality
  setPreset: (preset: GraphicsPreset) => void
}

export const useSettingsStore = create<SettingsState>((set) => ({
  preset: 'medium',
  quality: GRAPHICS_PRESETS.medium,
  setPreset: (preset) => set({ preset, quality: GRAPHICS_PRESETS[preset] }),
}))
