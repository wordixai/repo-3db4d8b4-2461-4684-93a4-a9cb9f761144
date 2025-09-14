import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { Particle } from '../components/Particle';

interface ParticleSystemSceneProps {
  color: string;
  particleCount?: number;
}

export const ParticleSystemScene: React.FC<ParticleSystemSceneProps> = ({
  color,
  particleCount = 50,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const particles = Array.from({ length: particleCount }, (_, i) => {
    const seed = i * 1337;
    const x = (seed % width) / width;
    const y = ((seed * 7) % height) / height;
    const speed = 0.5 + (seed % 100) / 200;
    const size = 2 + (seed % 5);
    
    return { x, y, speed, size, seed };
  });

  return (
    <AbsoluteFill>
      {particles.map((particle, i) => (
        <Particle
          key={i}
          x={particle.x}
          y={particle.y}
          speed={particle.speed}
          size={particle.size}
          color={color}
          frame={frame}
          width={width}
          height={height}
          seed={particle.seed}
        />
      ))}
      
      {/* Connection Lines */}
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {particles.slice(0, 10).map((particle, i) => {
          const nextParticle = particles[(i + 1) % 10];
          const x1 = particle.x * width + Math.sin(frame * 0.02 + particle.seed) * 50;
          const y1 = particle.y * height + Math.cos(frame * 0.02 + particle.seed) * 50;
          const x2 = nextParticle.x * width + Math.sin(frame * 0.02 + nextParticle.seed) * 50;
          const y2 = nextParticle.y * height + Math.cos(frame * 0.02 + nextParticle.seed) * 50;
          
          const opacity = interpolate(
            Math.abs(x1 - x2) + Math.abs(y1 - y2),
            [0, 200],
            [0.3, 0],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth={1}
              opacity={opacity}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};