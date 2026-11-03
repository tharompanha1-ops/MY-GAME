import { DebugHud } from '@/components/hud/DebugHud'
import { GameCanvas } from '@/game/engine/GameCanvas'

export function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <GameCanvas />
      <DebugHud />
    </div>
  )
}
