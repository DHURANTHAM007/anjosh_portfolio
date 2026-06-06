import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
      >
        <ambientLight intensity={0.15} />

        <pointLight
          position={[5, 0, 5]}
          color="#ff0000"
          intensity={1.5}
        />

        <Stars
          radius={120}
          depth={40}
          count={2500}
          factor={1.5}
          saturation={0}
          fade
          speed={0}
        />
      </Canvas>
    </div>
  );
}