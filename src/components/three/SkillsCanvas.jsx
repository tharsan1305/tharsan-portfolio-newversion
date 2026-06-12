import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Key skills subset to represent in 3D orbit
const SKILLS_3D = [
  // Cybersecurity (Cyan #00D4FF)
  { name: "Penetration Testing", level: "Expert", category: "Cybersecurity", color: "#00D4FF", radiusX: 2.2, radiusZ: 1.8, speed: 0.15, phase: 0 },
  { name: "Vulnerability Assessment", level: "Expert", category: "Cybersecurity", color: "#00D4FF", radiusX: 2.2, radiusZ: 1.8, speed: 0.15, phase: Math.PI * 0.67 },
  { name: "OSINT", level: "Expert", category: "Cybersecurity", color: "#00D4FF", radiusX: 2.2, radiusZ: 1.8, speed: 0.15, phase: Math.PI * 1.33 },

  // AI & ML (Purple #7B4FFF)
  { name: "LLM APIs", level: "Expert", category: "AI/ML", color: "#7B4FFF", radiusX: 3.2, radiusZ: 2.6, speed: -0.1, phase: 0.5 },
  { name: "RAG Applications", level: "Expert", category: "AI/ML", color: "#7B4FFF", radiusX: 3.2, radiusZ: 2.6, speed: -0.1, phase: 0.5 + Math.PI * 0.67 },
  { name: "AI Automation", level: "Expert", category: "AI/ML", color: "#7B4FFF", radiusX: 3.2, radiusZ: 2.6, speed: -0.1, phase: 0.5 + Math.PI * 1.33 },

  // Security Tools (Red #FF3B5C)
  { name: "Burp Suite", level: "Expert", category: "Security Tools", color: "#FF3B5C", radiusX: 4.2, radiusZ: 3.4, speed: 0.08, phase: 1.0 },
  { name: "Nmap", level: "Expert", category: "Security Tools", color: "#FF3B5C", radiusX: 4.2, radiusZ: 3.4, speed: 0.08, phase: 1.0 + Math.PI * 0.67 },
  { name: "Wireshark", level: "Expert", category: "Security Tools", color: "#FF3B5C", radiusX: 4.2, radiusZ: 3.4, speed: 0.08, phase: 1.0 + Math.PI * 1.33 },

  // Development (Green #00FF88)
  { name: "Python", level: "Expert", category: "Development", color: "#00FF88", radiusX: 5.2, radiusZ: 4.2, speed: -0.06, phase: 1.5 },
  { name: "JavaScript", level: "Expert", category: "Development", color: "#00FF88", radiusX: 5.2, radiusZ: 4.2, speed: -0.06, phase: 1.5 + Math.PI * 0.67 },
  { name: "MERN Stack", level: "Expert", category: "Development", color: "#00FF88", radiusX: 5.2, radiusZ: 4.2, speed: -0.06, phase: 1.5 + Math.PI * 1.33 }
];

const SkillOrb = ({ skill }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const thetaRef = useRef(skill.phase);

  useFrame((state, delta) => {
    if (!hovered) {
      thetaRef.current += skill.speed * delta;
    }

    if (meshRef.current) {
      // Calculate elliptical position
      const x = skill.radiusX * Math.cos(thetaRef.current);
      const z = skill.radiusZ * Math.sin(thetaRef.current);
      // Inclined orbit plane
      const y = Math.sin(thetaRef.current) * 0.4;
      
      meshRef.current.position.set(x, y, z);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Orb */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      >
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial 
          color={skill.color} 
          toneMapped={false}
        />
      </mesh>

      {/* Outer Halo */}
      <mesh scale={[1.4, 1.4, 1.4]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial 
          color={skill.color} 
          transparent 
          opacity={0.25} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Label HTML */}
      <Html distanceFactor={8} position={[0, 0.35, 0]} center pointerEvents="none">
        <div className="flex flex-col items-center">
          <div 
            className="px-2 py-0.5 rounded text-[8px] font-code text-white whitespace-nowrap bg-bg-primary/90 border transition-all duration-300"
            style={{ borderColor: skill.color }}
          >
            {skill.name}
          </div>
          
          {/* Skill level details popup */}
          <div 
            className={`mt-1 px-2 py-1 rounded bg-[#0d1529]/95 border border-border-color text-[8px] font-code text-center w-28 shadow-lg transition-all duration-300 pointer-events-none flex flex-col items-center ${
              hovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-1 scale-95'
            }`}
          >
            <span className="font-bold text-white mb-0.5">{skill.category}</span>
            <div className="flex items-center space-x-1">
              <span className="text-text-muted">Level:</span>
              <span className="font-bold text-accent-cyan">{skill.level}</span>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
};

const CentralSphere = () => {
  const centralRef = useRef();

  useFrame((state) => {
    if (centralRef.current) {
      const time = state.clock.getElapsedTime();
      const scale = 1.0 + Math.sin(time * 2) * 0.05;
      centralRef.current.scale.set(scale, scale, scale);
      centralRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={centralRef}>
      {/* Outer Glowing Sphere */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial 
          color="#00D4FF" 
          transparent 
          opacity={0.15} 
          wireframe
        />
      </mesh>
      
      {/* Central Solid Sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#050a18" />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshBasicMaterial 
          color="#7B4FFF" 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Center Text label */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.12}
        color="#00D4FF"
        font="https://fonts.gstatic.com/s/spacemono/v12/i7dMIFZ95zaFQmsX7R8pRE2HGQ.woff" // Space Mono
        anchorX="center"
        anchorY="middle"
      >
        THARSAN S
      </Text>
    </group>
  );
};

const SkillsCanvas = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 6, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        
        {/* Central Core */}
        <CentralSphere />

        {/* Orbit Path Lines for visual polish */}
        {SKILLS_3D.filter((_, i) => i % 3 === 0).map((skill, idx) => {
          // Draw elliptical rings
          const points = [];
          for (let i = 0; i <= 64; i++) {
            const angle = (i / 64) * Math.PI * 2;
            const x = skill.radiusX * Math.cos(angle);
            const z = skill.radiusZ * Math.sin(angle);
            const y = Math.sin(angle) * 0.4;
            points.push(new THREE.Vector3(x, y, z));
          }
          return (
            <group key={idx}>
              <lineLoop>
                <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints(points)} />
                <lineBasicMaterial attach="material" color={skill.color} transparent opacity={0.06} />
              </lineLoop>
            </group>
          );
        })}

        {/* Skills Orbs */}
        {SKILLS_3D.map((skill, idx) => (
          <SkillOrb key={idx} skill={skill} />
        ))}

        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
          dampingFactor={0.05}
          enableDamping
        />

        <EffectComposer>
          <Bloom
            intensity={1.4}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default SkillsCanvas;
