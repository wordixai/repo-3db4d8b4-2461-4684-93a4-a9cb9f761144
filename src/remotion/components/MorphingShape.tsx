import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface MorphingShapeProps {
  size: number;
  color: string;
  morphTarget: 'circle' | 'square' | 'triangle';
  animationSpeed?: number;
}

export const MorphingShape: React.FC<MorphingShapeProps> = ({
  size,
  color,
  morphTarget,
  animationSpeed = 0.01,
}) => {
  const frame = useCurrentFrame();
  
  const progress = (Math.sin(frame * animationSpeed) + 1) / 2;
  
  const getPath = () => {
    switch (morphTarget) {
      case 'circle':
        return `M ${size/2} 0 A ${size/2} ${size/2} 0 1 1 ${size/2-0.1} 0 Z`;
      case 'square':
        return `M 0 0 L ${size} 0 L ${size} ${size} L 0 ${size} Z`;
      case 'triangle':
        return `M ${size/2} 0 L ${size} ${size} L 0 ${size} Z`;
      default:
        return `M ${size/2} 0 A ${size/2} ${size/2} 0 1 1 ${size/2-0.1} 0 Z`;
    }
  };

  const opacity = interpolate(progress, [0, 0.5, 1], [0.3, 0.8, 0.3]);
  const scale = interpolate(progress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <svg
      width={size}
      height={size}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
      }}
    >
      <path
        d={getPath()}
        fill={color}
        filter="blur(2px)"
      />
    </svg>
  );
};