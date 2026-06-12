import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const particleCount = 80;
const maxDistance = 0.95;
const boundary = 2.0;

const NeuralNetwork = () => {
  const geometryRef = useRef();
  const lineGeometryRef = useRef();
  const linePositionAttributeRef = useRef();
  const pointsMaterialRef = useRef();

  // Create radial gradient texture for smooth round particles
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Initialize particles positions & velocities
  const [positions, velocities, linePositions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Random coordinates in [-boundary, boundary]
      pos[i * 3] = (Math.random() - 0.5) * boundary * 2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * boundary * 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * boundary * 2;

      // Random velocities in [-0.08, 0.08]
      vel[i * 3] = (Math.random() - 0.5) * 0.16;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.16;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.16;
    }

    // Allocate flat array for maximum possible line points (each segment has 2 points, 3 coords each)
    const linePos = new Float32Array(particleCount * particleCount * 6);

    return [pos, vel, linePos];
  }, []);

  useFrame((state, delta) => {
    // Limit delta to prevent giant jumps when tab loses focus
    const actualDelta = Math.min(delta, 0.1);

    // 1. Update particle positions
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Move
      positions[i3] += velocities[i3] * actualDelta;
      positions[i3 + 1] += velocities[i3 + 1] * actualDelta;
      positions[i3 + 2] += velocities[i3 + 2] * actualDelta;

      // Boundary collision check
      if (positions[i3] > boundary || positions[i3] < -boundary) velocities[i3] *= -1;
      if (positions[i3 + 1] > boundary || positions[i3 + 1] < -boundary) velocities[i3 + 1] *= -1;
      if (positions[i3 + 2] > boundary || positions[i3 + 2] < -boundary) velocities[i3 + 2] *= -1;
    }

    // Trigger update on points geometry
    if (geometryRef.current) {
      geometryRef.current.attributes.position.needsUpdate = true;
    }

    // 2. Pulse particle size
    if (pointsMaterialRef.current) {
      const time = state.clock.getElapsedTime();
      pointsMaterialRef.current.size = 0.12 + Math.sin(time * 2) * 0.03;
    }

    // 3. Connect close particles
    let lineIdx = 0;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x1 = positions[i3];
      const y1 = positions[i3 + 1];
      const z1 = positions[i3 + 2];

      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3;
        const x2 = positions[j3];
        const y2 = positions[j3 + 1];
        const z2 = positions[j3 + 2];

        // Euclidean distance
        const dx = x1 - x2;
        const dy = y1 - y2;
        const dz = z1 - z2;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          // Add segment points (i) to (j)
          linePositions[lineIdx++] = x1;
          linePositions[lineIdx++] = y1;
          linePositions[lineIdx++] = z1;
          linePositions[lineIdx++] = x2;
          linePositions[lineIdx++] = y2;
          linePositions[lineIdx++] = z2;
        }
      }
    }

    // Update line segments geometry
    if (lineGeometryRef.current && linePositionAttributeRef.current) {
      lineGeometryRef.current.setDrawRange(0, lineIdx / 3);
      linePositionAttributeRef.current.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Particles */}
      <points>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={pointsMaterialRef}
          color="#00D4FF"
          size={0.12}
          map={circleTexture}
          transparent
          alphaTest={0.01}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Connecting Lines */}
      <lineSegments>
        <bufferGeometry ref={lineGeometryRef}>
          <bufferAttribute
            ref={linePositionAttributeRef}
            attach="attributes-position"
            count={0}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7B4FFF"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
};

const AboutNeuralCanvas = () => {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[400px] relative">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 3.2], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        
        <NeuralNetwork />

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

export default AboutNeuralCanvas;
