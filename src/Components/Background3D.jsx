import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

/* 🎨 WARNA PER KATEGORI */
const categoryColors = {
  All: "#ef4444",
  Laptop: "#f87171",
  Gaming: "#c084fc",
  Aksesoris: "#fb923c",
};

/* 🔁 ABSTRACT RIBBON */
function Ribbon({ position, scale, color }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.0008;
      ref.current.rotation.y += 0.0005;
    }
  });


  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusKnotGeometry args={[3, 0.4, 120, 16]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

/* 🌊 LIGHT WAVE */
function LightWave({ color }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.elapsedTime * 0.02;
    }
  });

  return (
    <mesh ref={ref} position={[0, -6, -40]} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[70, 70, 32, 32]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.05}
      />
    </mesh>
  );
}

export default function Background3D({ category = "All" }) {
  const color = categoryColors[category] || categoryColors.All;

  return (
    <Canvas
      camera={{ position: [0, 0, 18], fov: 65 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -50,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[10, 10, 5]} intensity={0.9} />

      {/* KIRI */}
      <Ribbon position={[-14, 4, -28]} scale={1.3} color={color} />
      <Ribbon position={[-10, -4, -32]} scale={1.1} color={color} />

      {/* KANAN */}
      <Ribbon position={[14, 5, -30]} scale={1.4} color={color} />
      <Ribbon position={[10, -5, -34]} scale={1.1} color={color} />

      {/* BELAKANG */}
      <LightWave color={color} />
    </Canvas>
  );
}
