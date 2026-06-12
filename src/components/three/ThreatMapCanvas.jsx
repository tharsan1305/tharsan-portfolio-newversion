import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Coordinates on the flat X-Z plane
// Mapping: lat -> Z, lng -> X
const mapCoords = (lat, lng) => {
  const x = (lng / 180) * 12;
  const z = -(lat / 90) * 6;
  return { x, z };
};

const LOCATIONS = [
  { 
    id: 'trichy',
    name: 'Trichy (Home Base)',
    achievement: 'District 1st Place — Cybersecurity Poster & Awareness',
    details: 'Awarded ₹10,000 cash prize by Trichy District administration.',
    lat: 10.7905, 
    lng: 78.7047,
    color: '#00D4FF',
    pulse: true,
    y: 0
  },
  { 
    id: 'chennai',
    name: 'Chennai',
    achievement: 'Red Team Workshop',
    details: '2-Day Workshop on Active Directory infrastructure hacking.',
    lat: 13.0827, 
    lng: 80.2707,
    color: '#7B4FFF',
    pulse: false,
    y: 0
  },
  { 
    id: 'coimbatore',
    name: 'Coimbatore',
    achievement: 'DCG Workshop & DEFCON Meetup',
    details: 'Sessions on LLM Adversarial Attacks & OWASP Top 10 for AI.',
    lat: 11.0168, 
    lng: 76.9558,
    color: '#7B4FFF',
    pulse: false,
    y: 0
  },
  { 
    id: 'erode',
    name: 'Erode',
    achievement: 'AWS Cloud Workshop',
    details: 'Hands-on AWS Cloud Computing & Security at Kongu Eng College.',
    lat: 11.3410, 
    lng: 77.7172,
    color: '#7B4FFF',
    pulse: false,
    y: 0
  },
  { 
    id: 'national',
    name: 'National Level CTF',
    achievement: 'Hack2Quest CTF (Top 50)',
    details: 'Placed in Top 50 in India for 1st ever national-level CTF.',
    lat: 20.5937, 
    lng: 78.9629,
    color: '#FF3B5C',
    pulse: true,
    y: 0.6 // Elevated/floating above India
  }
];

const ConnectionArc = ({ start, end, color }) => {
  const points = useMemo(() => {
    const startVec = new THREE.Vector3(start.x, start.y, start.z);
    const endVec = new THREE.Vector3(end.x, end.y, end.z);
    const distance = startVec.distanceTo(endVec);
    
    // Parabolic arc height
    const height = distance * 0.35 + 0.1;
    const midVec = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
    midVec.y += height;

    const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
    return curve.getPoints(50);
  }, [start, end]);

  return (
    <Line 
      points={points} 
      color={color} 
      lineWidth={2} 
      transparent 
      opacity={0.7}
      blending={THREE.AdditiveBlending}
    />
  );
};

const ThreatMap = ({ hoveredId, setHoveredId }) => {
  const mapGroupRef = useRef();

  // Position and map the 3D coordinates
  const pinData = useMemo(() => {
    return LOCATIONS.map((loc) => {
      const { x, z } = mapCoords(loc.lat, loc.lng);
      return {
        ...loc,
        pos: new THREE.Vector3(x, loc.y, z)
      };
    });
  }, []);

  const trichyPin = useMemo(() => pinData.find(p => p.id === 'trichy'), [pinData]);

  // Slow ambient rotation of the map group (or camera in canvas)
  useFrame((state) => {
    if (mapGroupRef.current) {
      // Small rocking/drift animation
      const time = state.clock.getElapsedTime();
      mapGroupRef.current.rotation.y = Math.sin(time * 0.05) * 0.08;
    }
  });

  return (
    <group ref={mapGroupRef}>
      {/* Tactical Grid Base Floor */}
      <gridHelper 
        args={[16, 24, '#00D4FF', '#111A30']} 
        position={[5.1, -0.01, -0.9]} 
      />

      {/* Holographic grid perimeter border */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[5.1, -0.02, -0.9]}>
        <planeGeometry args={[16, 16]} />
        <meshBasicMaterial color="#050a18" transparent opacity={0.5} />
      </mesh>

      {/* Achievement pins */}
      {pinData.map((pin) => {
        const isHovered = hoveredId === pin.id;
        return (
          <group key={pin.id} position={pin.pos}>
            {/* Standing Pin Post (Line connecting plane to floating sphere) */}
            {pin.y > 0 && (
              <Line
                points={[new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, pin.y, 0)]}
                color={pin.color}
                lineWidth={1}
                transparent
                opacity={0.3}
              />
            )}
            
            {/* Solid Core Sphere */}
            <mesh 
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredId(pin.id);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                setHoveredId(null);
              }}
            >
              <sphereGeometry args={[pin.pulse ? 0.08 : 0.06, 16, 16]} />
              <meshBasicMaterial color={pin.color} />
            </mesh>

            {/* Glowing outer aura */}
            <mesh scale={isHovered ? [2.0, 2.0, 2.0] : [1.4, 1.4, 1.4]}>
              <sphereGeometry args={[pin.pulse ? 0.08 : 0.06, 16, 16]} />
              <meshBasicMaterial 
                color={pin.color} 
                transparent 
                opacity={isHovered ? 0.45 : 0.2} 
                blending={THREE.AdditiveBlending} 
              />
            </mesh>

            {/* Pulsing ring aura if it is a pulsing pin */}
            {pin.pulse && (
              <PulsingRing color={pin.color} />
            )}

            {/* Interactive Tooltip HTML */}
            <Html distanceFactor={6} position={[0, 0.4, 0]} center pointerEvents="none">
              <div 
                className={`px-3 py-2 rounded-lg bg-[#0d1529]/95 border border-border-color shadow-lg transition-all duration-300 w-52 flex flex-col font-code pointer-events-none ${
                  isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
                }`}
                style={{ borderLeftColor: pin.color, borderLeftWidth: '3px' }}
              >
                <span className="font-bold text-white text-[10px] tracking-wide mb-0.5">{pin.name}</span>
                <span className="text-accent-cyan text-[9px] font-bold mb-1 leading-tight">{pin.achievement}</span>
                <p className="text-text-muted text-[8px] leading-relaxed">{pin.details}</p>
              </div>
            </Html>
          </group>
        );
      })}

      {/* Arcs connecting Trichy to other pins */}
      {trichyPin && pinData.filter(p => p.id !== 'trichy').map((pin) => (
        <ConnectionArc 
          key={pin.id} 
          start={trichyPin.pos} 
          end={pin.pos} 
          color={pin.color} 
        />
      ))}
    </group>
  );
};

// Sub-component to manage pulse scaling
const PulsingRing = ({ color }) => {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      const time = state.clock.getElapsedTime();
      const scale = 1.0 + (time * 2) % 1.5;
      const opacity = Math.max(0, 0.4 - ((scale - 1) / 1.5) * 0.4);
      ringRef.current.scale.set(scale, 1, scale);
      ringRef.current.material.opacity = opacity;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.1, 0.12, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
};

const ThreatMapCanvas = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // Position camera focused around India region
  // Map coords for India is roughly X: 3.5, Z: -0.6
  return (
    <div className="w-full h-[400px] relative">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [5.1, 2.5, -0.9 + 2.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 10, -1]} intensity={0.8} />

        <ThreatMap hoveredId={hoveredId} setHoveredId={setHoveredId} />

        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          target={[5.1, 0.1, -0.9]}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 6}
          dampingFactor={0.05}
          enableDamping
        />

        <EffectComposer>
          <Bloom
            intensity={1.3}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ThreatMapCanvas;
