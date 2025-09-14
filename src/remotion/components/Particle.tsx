import React from 'react';

interface ParticleProps {
  x: number;
  y: number;
  speed: number;
  size: number;
  color: string;
  frame: number;
  width: number;
  height: number;
  seed: number;
}

export const Particle: React.FC<ParticleProps> = ({
  x,
  y,
  speed,
  size,
  color,
  frame,
  width,
  height,
  seed,
}) => {
  const currentX = (x * width + Math.sin(frame * 0.02 + seed) * 50) % width;
  const currentY = (y * height + Math.cos(frame * 0.01 + seed) * 30 + frame * speed) % height;
  
  const opacity = 0.3 + Math.sin(frame * 0.05 + seed) * 0.3;
  const scale = 0.5 + Math.sin(frame * 0.03 + seed) * 0.5;

  return (
    <div
      style={{
        position: 'absolute',
        left: currentX,
        top: currentY,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        opacity,
        transform: `scale(${scale})`,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        filter: 'blur(1px)',
      }}
    />
  );
};