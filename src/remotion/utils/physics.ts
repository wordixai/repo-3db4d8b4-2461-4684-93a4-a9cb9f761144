export interface PhysicsObject {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  radius: number;
}

export const applyGravity = (object: PhysicsObject, gravity: number = 0.5): PhysicsObject => {
  return {
    ...object,
    vy: object.vy + gravity,
  };
};

export const applyVelocity = (object: PhysicsObject): PhysicsObject => {
  return {
    ...object,
    x: object.x + object.vx,
    y: object.y + object.vy,
  };
};

export const bounce = (
  object: PhysicsObject,
  bounds: { width: number; height: number },
  damping: number = 0.8
): PhysicsObject => {
  let { x, y, vx, vy } = object;
  
  if (x <= object.radius || x >= bounds.width - object.radius) {
    vx = -vx * damping;
    x = Math.max(object.radius, Math.min(bounds.width - object.radius, x));
  }
  
  if (y <= object.radius || y >= bounds.height - object.radius) {
    vy = -vy * damping;
    y = Math.max(object.radius, Math.min(bounds.height - object.radius, y));
  }
  
  return { ...object, x, y, vx, vy };
};

export const calculateDistance = (
  obj1: { x: number; y: number },
  obj2: { x: number; y: number }
): number => {
  const dx = obj2.x - obj1.x;
  const dy = obj2.y - obj1.y;
  return Math.sqrt(dx * dx + dy * dy);
};

export const attractToPoint = (
  object: PhysicsObject,
  target: { x: number; y: number },
  strength: number = 0.1
): PhysicsObject => {
  const dx = target.x - object.x;
  const dy = target.y - object.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  if (distance > 0) {
    const force = strength / (distance * distance);
    const fx = (dx / distance) * force;
    const fy = (dy / distance) * force;
    
    return {
      ...object,
      vx: object.vx + fx,
      vy: object.vy + fy,
    };
  }
  
  return object;
};