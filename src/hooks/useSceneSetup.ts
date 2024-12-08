import { useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

export const useSceneSetup = (imageUrl?: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return useMemo(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    if (imageUrl) {
      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1);

      const textureLoader = new THREE.TextureLoader();
      textureLoader.crossOrigin = 'anonymous';
      
      const texture = textureLoader.load(
        imageUrl,
        () => {
          setIsLoading(false);
          setError(null);
        },
        (progress) => {
          // Optional: Handle loading progress
          console.log(`Loading: ${Math.round((progress.loaded / progress.total) * 100)}%`);
        },
        (error) => {
          console.error('Error loading texture:', error);
          setError('Failed to load scene image');
          setIsLoading(false);
        }
      );
      
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.encoding = THREE.sRGBEncoding;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      
      const material = new THREE.MeshBasicMaterial({ 
        map: texture,
        side: THREE.BackSide
      });
      
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
    }

    camera.position.set(0, 0, 0.1);

    return { scene, camera, isLoading, error };
  }, [imageUrl]);
};