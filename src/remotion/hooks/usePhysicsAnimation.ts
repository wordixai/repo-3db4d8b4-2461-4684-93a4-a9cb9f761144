import { useState, useEffect } from 'react';
import { useCurrentFrame } from 'remotion';
import { PhysicsObject, applyGravity, applyVelocity, bounce } from '../utils/physics';

interface UsePhysicsAnimationProps {
  initialObject: PhysicsObject;
  bounds: { width: number; height: number };
  gravity?: number;
  damping?: number;
  enabled?: boolean;
}

export const usePhysicsAnimation = ({
  initialObject,
  bounds,
  gravity = 0.5,
  damping = 0.8,
  enabled = true,
}: UsePhysicsAnimationProps) => {
  const frame = useCurrentFrame();
  const [object, setObject] = useState<PhysicsObject>(initialObject);
  
  useEffect(() => {
    if (!enabled) return;
    
    let currentObject = initialObject;
    
    // Simulate physics for each frame up to current frame
    for (let i = 0; i < frame; i++) {
      currentObject = applyGravity(currentObject, gravity);
      currentObject = applyVelocity(currentObject);
      currentObject = bounce(currentObject, bounds, damping);
    }
    
    setObject(currentObject);
  }, [frame, enabled, gravity, damping, bounds.width, bounds.height]);
  
  return object;
};