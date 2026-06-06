import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function JourneyScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
      >
        <ambientLight intensity={0.1} />

        <pointLight
          position={[0, 0, 5]}
          color="#ff0000"
          intensity={0.8}
        />

        <Stars
          radius={150}
          depth={60}
          count={6000}
          factor={1.4}
          saturation={0}
          fade
          speed={0}
        />
      </Canvas>
    </div>
  );
}