import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Sphere } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Trichy Coords
const TRICHY_COORDS = { lat: 10.7905, lng: 78.7047 };

// World Cities Coordinates
const CITIES = [
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
  { name: 'Cape Town', lat: -33.9249, lng: 18.4241 },
  { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 }
];

// Helper to convert lat/lng to 3D Cartesian coordinates on sphere
function convertLatLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.sin(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.cos(theta);

  return new THREE.Vector3(x, y, z);
}

// Generate points for arc between two Vector3 positions
function createConnectionArc(start, end, radius) {
  const points = [];
  const startVec = start.clone();
  const endVec = end.clone();
  
  const distance = startVec.distanceTo(endVec);
  const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
  
  // Height of the arc depends on the distance
  const heightMultiplier = 1.0 + (distance * 0.15);
  midPoint.normalize().multiplyScalar(radius * heightMultiplier);
  
  // Create quadratic bezier curve
  const curve = new THREE.QuadraticBezierCurve3(startVec, midPoint, endVec);
  const curvePoints = curve.getPoints(50);
  
  return curvePoints;
}

const InteractiveGlobe = ({ isHovered, setHovered }) => {
  const globeRef = useRef();
  const pinRef = useRef();
  const radius = 2.0;

  // Calculate coordinates
  const trichyPos = useMemo(() => convertLatLngToVector3(TRICHY_COORDS.lat, TRICHY_COORDS.lng, radius), [radius]);
  
  const connections = useMemo(() => {
    return CITIES.map((city) => {
      const cityPos = convertLatLngToVector3(city.lat, city.lng, radius);
      const arcPoints = createConnectionArc(trichyPos, cityPos, radius);
      return {
        name: city.name,
        pos: cityPos,
        points: arcPoints
      };
    });
  }, [trichyPos, radius]);

  // Handle auto-rotation
  useFrame((state, delta) => {
    if (globeRef.current && !isHovered) {
      globeRef.current.rotation.y += 0.3 * delta;
    }
  });

  // Pulse Trichy pin
  useFrame((state) => {
    if (pinRef.current) {
      const time = state.clock.getElapsedTime();
      const scale = 1.0 + Math.sin(time * 8) * 0.3;
      pinRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={globeRef}>
      {/* Dark Base Sphere */}
      <mesh>
        <sphereGeometry args={[radius - 0.01, 64, 64]} />
        <meshBasicMaterial color="#050a18" transparent opacity={0.8} />
      </mesh>

      {/* Wireframe Sphere Grid */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial 
          color="#00D4FF" 
          wireframe 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Grid Lines on Globe */}
      <mesh>
        <sphereGeometry args={[radius + 0.005, 16, 16]} />
        <meshBasicMaterial 
          color="#7B4FFF" 
          wireframe 
          transparent 
          opacity={0.05} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Trichy pulsing cyan pin */}
      <group position={trichyPos}>
        {/* Core dot */}
        <mesh ref={pinRef}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#00D4FF" />
        </mesh>
        {/* Outer pulse aura */}
        <mesh>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial 
            color="#00D4FF" 
            transparent 
            opacity={0.25} 
            blending={THREE.AdditiveBlending} 
          />
        </mesh>
      </group>

      {/* Connection Arcs and Target Pins */}
      {connections.map((conn, idx) => (
        <group key={idx}>
          {/* Connection Line Arc */}
          <Line 
            points={conn.points} 
            color="#00D4FF" 
            lineWidth={1.5}
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
          {/* Target City Pin */}
          <mesh position={conn.pos}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial color="#7B4FFF" transparent opacity={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const GlobeCanvas = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div 
      className="w-full h-[350px] md:h-[450px] relative cursor-grab active:cursor-grabbing"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <InteractiveGlobe isHovered={isHovered} setHovered={setHovered} />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          dampingFactor={0.05}
          enableDamping
        />

        <EffectComposer>
          <Bloom
            intensity={1.2}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default GlobeCanvas;
