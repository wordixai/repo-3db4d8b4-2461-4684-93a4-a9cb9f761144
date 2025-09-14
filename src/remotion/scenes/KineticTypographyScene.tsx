import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { KineticText } from '../components/KineticText';

interface KineticTypographySceneProps {
  text: string;
  fontSize: number;
  color: string;
  strokeColor: string;
  animationType: 'reveal' | 'wave' | 'explosion' | 'spiral';
}

export const KineticTypographyScene: React.FC<KineticTypographySceneProps> = ({
  text,
  fontSize,
  color,
  strokeColor,
  animationType,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const containerOpacity = interpolate(
    frame,
    [0, 30, durationInFrames - 30, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const backgroundPulse = interpolate(
    frame,
    [0, 60, 120],
    [0, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: containerOpacity,
        background: `radial-gradient(circle, ${strokeColor}${Math.floor(backgroundPulse * 30).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
      }}
    >
      <KineticText
        text={text}
        fontSize={fontSize}
        color={color}
        strokeColor={strokeColor}
        animationType={animationType}
        frame={frame}
      />
      
      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${strokeColor} 50%, transparent 100%)`,
          bottom: '30%',
          transform: `scaleX(${backgroundPulse})`,
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${strokeColor} 50%, transparent 100%)`,
          top: '30%',
          transform: `scaleX(${backgroundPulse})`,
        }}
      />
    </AbsoluteFill>
  );
};