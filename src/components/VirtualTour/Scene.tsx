import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSceneSetup } from '../../hooks/useSceneSetup';
import { useInteractionHandlers } from '../../hooks/useInteractionHandlers';
import { useTourStore } from '../../store/tourStore';

const Scene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  const { currentSceneId, scenes } = useTourStore();
  const currentScene = scenes.find(scene => scene.id === currentSceneId);
  
  const { scene, camera, isLoading, error } = useSceneSetup(currentScene?.imageUrl);
  const { handlePointerDown, handlePointerMove, handlePointerUp } = useInteractionHandlers(camera);

  useEffect(() => {
    if (!containerRef.current || !currentScene) return;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true
    });
    rendererRef.current = renderer;
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [scene, camera, currentScene]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white text-lg">Loading scene...</div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-red-500 text-lg">{error}</div>
        </div>
      )}
    </div>
  );
};

export default Scene;