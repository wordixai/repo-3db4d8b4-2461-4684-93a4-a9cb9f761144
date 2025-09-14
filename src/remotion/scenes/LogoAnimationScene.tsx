import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Img } from 'remotion';
import { MorphingShape } from '../components/MorphingShape';

interface LogoAnimationSceneProps {
  logoUrl: string;
  brandColor: string;
  morphTarget?: 'circle' | 'square' | 'triangle';
}

export const LogoAnimationScene: React.FC<LogoAnimationSceneProps> = ({
  logoUrl,
  brandColor,
  morphTarget = 'circle',
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const logoScale = interpolate(
    frame,
    [0, 60, durationInFrames - 60, durationInFrames],
    [0, 1.2, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const logoRotation = interpolate(
    frame,
    [0, durationInFrames],
    [0, 360],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const glowIntensity = interpolate(
    frame,
    [30, 90, durationInFrames - 30],
    [0, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const particleCount = Math.floor(interpolate(
    frame,
    [60, 120],
    [0, 20],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  ));

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      {/* Background Morphing Shape */}
      <MorphingShape
        size={400}
        color={`${brandColor}20`}
        morphTarget={morphTarget}
        animationSpeed={0.02}
      />

      {/* Particle Ring */}
      {Array.from({ length: particleCount }).map((_, i) => {
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 200 + Math.sin(frame * 0.1 + i) * 50;
        const x = Math.cos(angle + frame * 0.05) * radius;
        const y = Math.sin(angle + frame * 0.05) * radius;
        
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(${x}px, ${y}px)`,
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: brandColor,
              boxShadow: `0 0 10px ${brandColor}`,
              opacity: glowIntensity,
            }}
          />
        );
      })}

      {/* Main Logo */}
      <div
        style={{
          transform: `scale(${logoScale}) rotate(${logoRotation}deg)`,
          filter: `drop-shadow(0 0 ${glowIntensity * 30}px ${brandColor})`,
        }}
      >
        <Img
          src={logoUrl}
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            border: `4px solid ${brandColor}`,
            boxShadow: `0 0 ${glowIntensity * 50}px ${brandColor}50`,
          }}
        />
      </div>

      {/* Energy Rings */}
      {[1, 2, 3].map((ring) => {
        const ringScale = interpolate(
          frame,
          [ring * 20, ring * 20 + 60],
          [0.5, 2],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );
        
        const ringOpacity = interpolate(
          frame,
          [ring * 20, ring * 20 + 30, ring * 20 + 60],
          [0, 0.8, 0],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={ring}
            style={{
              position: 'absolute',
              width: 250,
              height: 250,
              border: `2px solid ${brandColor}`,
              borderRadius: '50%',
              transform: `scale(${ringScale})`,
              opacity: ringOpacity,
              left: '50%',
              top: '50%',
              marginLeft: -125,
              marginTop: -125,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};