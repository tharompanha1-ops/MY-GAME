import { useFps } from '@/hooks/useFps'
import { useSettingsStore } from '@/stores/useSettingsStore'
import type { GraphicsPreset } from '@/types/graphics'

const PRESETS: GraphicsPreset[] = ['low', 'medium', 'high', 'ultra']

export function DebugHud() {
  const fps = useFps()
  const preset = useSettingsStore((s) => s.preset)
  const setPreset = useSettingsStore((s) => s.setPreset)
  return (
    <div className="pointer-events-none absolute left-4 top-4 text-sm text-white/90">
      <div className="mb-2 font-semibold">{fps} FPS</div>
      <div className="pointer-events-auto flex gap-1">
        {PRESETS.map((p) => (
          <button
            key={p}
            onClick={() => setPreset(p)}
            className={`rounded px-2 py-1 capitalize ${
              p === preset ? 'bg-rose-500 text-white' : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}
