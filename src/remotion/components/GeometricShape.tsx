import React from 'react';

interface GeometricShapeProps {
  type: 'triangle' | 'square' | 'circle' | 'hexagon';
  x: number;
  y: number;
  size: number;
  color: string;
  frame: number;
  speed: number;
  index: number;
}

export const GeometricShape: React.FC<GeometricShapeProps> = ({
  type,
  x,
  y,
  size,
  color,
  frame,
  speed,
  index,
}) => {
  const rotation = frame * speed + index * 45;
  const opacity = 0.1 + Math.sin(frame * 0.02 + index) * 0.1;
  const scale = 0.8 + Math.sin(frame * 0.03 + index) * 0.2;
  
  const currentX = x + Math.sin(frame * 0.01 + index) * 20;
  const currentY = y + Math.cos(frame * 0.015 + index) * 15;

  const getShapePath = () => {
    const half = size / 2;
    switch (type) {
      case 'triangle':
        return `M ${half} 0 L ${size} ${size} L 0 ${size} Z`;
      case 'square':
        return `M 0 0 L ${size} 0 L ${size} ${size} L 0 ${size} Z`;
      case 'circle':
        return `M ${half} 0 A ${half} ${half} 0 1 1 ${half-0.1} 0 Z`;
      case 'hexagon':
        const points = [];
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = half + half * Math.cos(angle);
          const py = half + half * Math.sin(angle);
          points.push(`${px} ${py}`);
        }
        return `M ${points[0]} L ${points.slice(1).join(' L ')} Z`;
      default:
        return '';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      style={{
        position: 'absolute',
        left: currentX - size / 2,
        top: currentY - size / 2,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity,
      }}
    >
      <path
        d={getShapePath()}
        fill="none"
        stroke={color}
        strokeWidth={2}
        filter="blur(1px)"
      />
    </svg>
  );
};