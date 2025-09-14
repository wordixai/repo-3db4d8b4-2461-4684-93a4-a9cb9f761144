import React from 'react';
import { interpolate } from 'remotion';

interface MetricCardProps {
  label: string;
  value: number;
  color: string;
  frame: number;
  delay: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  color,
  frame,
  delay,
}) => {
  const animationProgress = interpolate(
    frame - delay,
    [0, 30],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  
  const scale = interpolate(
    frame - delay,
    [0, 30, 60],
    [0.8, 1.1, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  
  const animatedValue = Math.round(value * animationProgress);
  const pulseIntensity = Math.sin(frame * 0.1) * 0.2 + 0.8;

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        border: `2px solid ${color}`,
        borderRadius: 12,
        padding: 20,
        textAlign: 'center',
        transform: `scale(${scale})`,
        opacity: animationProgress,
        boxShadow: `0 0 ${pulseIntensity * 20}px ${color}30`,
        backdropFilter: 'blur(10px)',
        minWidth: 120,
      }}
    >
      <div
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          color,
          marginBottom: 8,
          textShadow: `0 0 10px ${color}`,
        }}
      >
        {animatedValue}%
      </div>
      <div
        style={{
          fontSize: 14,
          color: '#CCCCCC',
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
        {label}
      </div>
    </div>
  );
};