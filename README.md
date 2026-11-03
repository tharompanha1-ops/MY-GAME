# Anime Action Game

Original 3D anime fantasy action game (React + TypeScript + Vite + Three.js / React Three Fiber + Rapier).
Status: **Phase 2 complete (scaffold)**. See `docs/` for design notes as phases land.

## Windows setup
Requirements: Node.js 20 or newer (https://nodejs.org), a Chromium-based browser.

```powershell
cd anime-action-game
npm install
npm run dev        # http://localhost:5173
```

## Commands
| Command | Purpose |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run typecheck` | TypeScript check, no emit |
| `npm test` | Vitest unit tests |
| `npm run build` | Typecheck + production build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Phase 2 acceptance check
1. `npm install` completes with no errors.
2. `npm run typecheck` and `npm test` pass (6 tests).
3. `npm run dev` shows a dark scene with a red cube that falls and bounces on the floor, plus an FPS counter and Low/Medium/High/Ultra buttons (switching them changes shadows and resolution).
4. `npm run build` succeeds.

## Architecture rules
- Gameplay simulation (`src/game/core`) has no React or Three.js imports and runs on a fixed 60 Hz step.
- Rendering (`src/game/engine`) reads simulation state; Zustand stores hold UI-facing state only.
- Weapons, skills, enemies and bosses are typed data registries (from Phase 6 on).
