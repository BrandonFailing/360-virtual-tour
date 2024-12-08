import { useCallback, useRef } from 'react';
import * as THREE from 'three';

export const useInteractionHandlers = (camera: THREE.PerspectiveCamera) => {
  const isUserInteracting = useRef(false);
  const coords = useRef({
    onPointerDownMouseX: 0,
    onPointerDownMouseY: 0,
    onPointerDownLon: 0,
    onPointerDownLat: 0,
    lon: 0,
    lat: 0,
  });

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    isUserInteracting.current = true;
    const rect = event.currentTarget.getBoundingClientRect();
    
    coords.current.onPointerDownMouseX = event.clientX - rect.left;
    coords.current.onPointerDownMouseY = event.clientY - rect.top;
    coords.current.onPointerDownLon = coords.current.lon;
    coords.current.onPointerDownLat = coords.current.lat;
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    if (!isUserInteracting.current) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    coords.current.lon = (coords.current.onPointerDownMouseX - x) * 0.1 + coords.current.onPointerDownLon;
    // Reversed the vertical movement by changing (y - onPointerDownMouseY) to (onPointerDownMouseY - y)
    coords.current.lat = (coords.current.onPointerDownMouseY - y) * 0.1 + coords.current.onPointerDownLat;
    
    const lat = Math.max(-85, Math.min(85, coords.current.lat));
    const phi = THREE.MathUtils.degToRad(90 - lat);
    const theta = THREE.MathUtils.degToRad(coords.current.lon);

    camera.position.x = 100 * Math.sin(phi) * Math.cos(theta);
    camera.position.y = 100 * Math.cos(phi);
    camera.position.z = 100 * Math.sin(phi) * Math.sin(theta);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }, [camera]);

  const handlePointerUp = useCallback(() => {
    isUserInteracting.current = false;
  }, []);

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
};