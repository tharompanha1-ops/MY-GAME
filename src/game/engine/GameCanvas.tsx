import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { useSettingsStore } from '@/stores/useSettingsStore'
import { Simulation } from './Simulation'

/** Phase 2 smoke-test scene: proves renderer, physics and the sim loop are wired. Replaced in Phase 3. */
export function GameCanvas() {
  const q = useSettingsStore((s) => s.quality)
  return (
    <Canvas
      shadows={q.shadows}
      dpr={q.dpr}
      gl={{ antialias: q.antialias }}
      camera={{ position: [0, 6, 11], fov: 60 }}
    >
      <color attach="background" args={['#14121f']} />
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[8, 12, 6]}
        intensity={1.6}
        castShadow={q.shadows}
        shadow-mapSize={[q.shadowMapSize, q.shadowMapSize]}
      />
      <Physics gravity={[0, -20, 0]}>
        <Simulation />
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[0, -0.5, 0]} receiveShadow>
            <boxGeometry args={[60, 1, 60]} />
            <meshStandardMaterial color="#2b2a44" flatShading />
          </mesh>
        </RigidBody>
        <RigidBody position={[0, 6, 0]} colliders="cuboid" restitution={0.3}>
          <mesh castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#ff5d73" flatShading />
          </mesh>
        </RigidBody>
      </Physics>
    </Canvas>
  )
}
