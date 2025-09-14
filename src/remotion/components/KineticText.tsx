import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface KineticTextProps {
  text: string;
  fontSize: number;
  color: string;
  strokeColor: string;
  animationType: 'reveal' | 'wave' | 'explosion' | 'spiral';
  frame: number;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  fontSize,
  color,
  strokeColor,
  animationType,
  frame,
}) => {
  const letters = text.split('');

  const getLetterAnimation = (index: number) => {
    const delay = index * 3;
    const animationFrame = Math.max(0, frame - delay);

    switch (animationType) {
      case 'reveal':
        return {
          opacity: interpolate(animationFrame, [0, 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          transform: `translateY(${interpolate(animationFrame, [0, 20], [50, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
        };
      
      case 'wave':
        return {
          opacity: 1,
          transform: `translateY(${Math.sin(frame * 0.1 + index * 0.5) * 20}px)`,
        };
      
      case 'explosion':
        const angle = (index / letters.length) * Math.PI * 2;
        const distance = interpolate(animationFrame, [0, 30, 60], [0, 100, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        return {
          opacity: interpolate(animationFrame, [0, 10, 50, 60], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
        };
      
      case 'spiral':
        const spiralAngle = frame * 0.1 + index * 0.3;
        const spiralRadius = interpolate(frame, [0, 60], [100, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        return {
          opacity: interpolate(frame, [index * 2, index * 2 + 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          transform: `translate(${Math.cos(spiralAngle) * spiralRadius}px, ${Math.sin(spiralAngle) * spiralRadius}px)`,
        };
      
      default:
        return { opacity: 1, transform: 'none' };
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        fontSize,
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {letters.map((letter, index) => {
        const animation = getLetterAnimation(index);
        
        return (
          <span
            key={index}
            style={{
              display: 'inline-block',
              color,
              WebkitTextStroke: `2px ${strokeColor}`,
              textShadow: `0 0 20px ${strokeColor}50`,
              margin: '0 2px',
              ...animation,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        );
      })}
    </div>
  );
};