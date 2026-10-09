import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.3, 5.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = false;
    container.appendChild(renderer.domElement);

    // Lighting for luminous light glass sheen without dull gray voids
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(3, 4, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x93C5FD, 1.2);
    dirLight2.position.set(-3, -2, 2);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xE6EEFF, 1.8, 10);
    pointLight.position.set(0, 1.5, 3);
    scene.add(pointLight);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Floor Shadow texture (clean procedural radial shadow)
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const shadowCtx = shadowCanvas.getContext('2d');
    if (shadowCtx) {
      const gradient = shadowCtx.createRadialGradient(64, 64, 0, 64, 64, 60);
      gradient.addColorStop(0, 'rgba(47, 107, 255, 0.18)');
      gradient.addColorStop(0.5, 'rgba(96, 165, 250, 0.08)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      shadowCtx.fillStyle = gradient;
      shadowCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(2.6, 2.6);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.5,
      depthWrite: false
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.55;
    rootGroup.add(shadowPlane);

    // Light glass face texture (white to #E6EEFF gradient)
    const faceCanvas = document.createElement('canvas');
    faceCanvas.width = 512;
    faceCanvas.height = 512;
    const faceCtx = faceCanvas.getContext('2d');
    if (faceCtx) {
      // Soft diagonal linear gradient from white (#FFFFFF) to light blue/tint (#E6EEFF)
      const gradient = faceCtx.createLinearGradient(0, 0, 512, 512);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.72)');
      gradient.addColorStop(0.4, 'rgba(244, 248, 255, 0.58)');
      gradient.addColorStop(1, 'rgba(230, 238, 255, 0.65)');
      faceCtx.fillStyle = gradient;
      faceCtx.fillRect(0, 0, 512, 512);

      // Delicate subtle gloss reflection band
      const sheen = faceCtx.createLinearGradient(50, 0, 220, 512);
      sheen.addColorStop(0, 'rgba(255, 255, 255, 0)');
      sheen.addColorStop(0.5, 'rgba(255, 255, 255, 0.35)');
      sheen.addColorStop(1, 'rgba(255, 255, 255, 0)');
      faceCtx.fillStyle = sheen;
      faceCtx.fillRect(0, 0, 512, 512);
    }
    const faceTexture = new THREE.CanvasTexture(faceCanvas);

    // 3D Glass Cube (smaller and softer, decorative element behind the photo)
    const cubeGroup = new THREE.Group();
    rootGroup.add(cubeGroup);

    const cubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);

    // Premium light glass material with white-to-#E6EEFF gradient and high clearcoat
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      map: faceTexture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.58,
      roughness: 0.08,
      metalness: 0.04,
      clearcoat: 0.95,
      clearcoatRoughness: 0.08,
      reflectivity: 0.85,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, glassMaterial);
    cubeGroup.add(cubeMesh);

    // Thin blue edge
    const edgesGeo = new THREE.EdgesGeometry(cubeGeo);
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x2F6BFF,
      transparent: true,
      opacity: 0.8,
      linewidth: 1
    });
    const edgeLines = new THREE.LineSegments(edgesGeo, edgeMaterial);
    cubeGroup.add(edgeLines);

    // Secondary subtle outer glow line
    const glowGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.62, 1.62, 1.62));
    const glowMat = new THREE.LineBasicMaterial({
      color: 0x60A5FA,
      transparent: true,
      opacity: 0.3,
      linewidth: 1
    });
    const glowLines = new THREE.LineSegments(glowGeo, glowMat);
    cubeGroup.add(glowLines);

    // Inner geometric node (soft, smaller, delicate)
    const innerGeo = new THREE.OctahedronGeometry(0.35);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x60A5FA,
      metalness: 0.5,
      roughness: 0.2,
      transparent: true,
      opacity: 0.35,
      wireframe: true
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    cubeGroup.add(innerMesh);

    // Mouse and Device Orientation Tracking
    let mouseX = 0;
    let mouseY = 0;
    let tiltX = 0;
    let tiltY = 0;
    let baseRotationX = 0.3;
    let baseRotationY = 0.5;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    const handleDeviceOrientation = (e) => {
      if (e.gamma !== null && e.beta !== null) {
        tiltY = (e.gamma / 45); // Left-right tilt [-1, 1]
        tiltX = ((e.beta - 45) / 45); // Front-back tilt [-1, 1]
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });
    }

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous gentle rotation
        baseRotationY += 0.007;
        baseRotationX += 0.003;

        // Gentle floating motion
        const floatY = Math.sin(elapsedTime * 1.6) * 0.12;
        cubeGroup.position.y = floatY;

        // Scale shadow inversely with floating
        shadowPlane.scale.set(1 + floatY * 0.6, 1 + floatY * 0.6, 1);
        shadowMat.opacity = 0.55 - floatY * 0.3;

        // Smoothly interpolate rotation to react to mouse + device tilt
        const targetRotY = baseRotationY + (mouseX + tiltY) * 0.6;
        const targetRotX = baseRotationX - (mouseY + tiltX) * 0.5;

        cubeGroup.rotation.y += (targetRotY - cubeGroup.rotation.y) * 0.06;
        cubeGroup.rotation.x += (targetRotX - cubeGroup.rotation.x) * 0.06;

        // Inner core counter-rotation
        innerMesh.rotation.y = -elapsedTime * 1.2;
        innerMesh.rotation.x = elapsedTime * 0.8;
      } else {
        cubeGroup.rotation.y = 0.6;
        cubeGroup.rotation.x = 0.35;
      }

      renderer.render(scene, camera);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      cubeGeo.dispose();
      edgesGeo.dispose();
      glowGeo.dispose();
      innerGeo.dispose();
      shadowGeo.dispose();
      glassMaterial.dispose();
      faceTexture.dispose();
      edgeMaterial.dispose();
      glowMat.dispose();
      innerMat.dispose();
      shadowMat.dispose();
      shadowTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center select-none"
      aria-hidden="true"
    />
  );
};

export default HeroCube;
