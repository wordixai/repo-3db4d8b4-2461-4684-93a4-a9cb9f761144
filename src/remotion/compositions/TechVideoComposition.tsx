import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';
import { CodeRevealScene } from '../scenes/CodeRevealScene';
import { LogoAnimationScene } from '../scenes/LogoAnimationScene';
import { KineticTypographyScene } from '../scenes/KineticTypographyScene';
import { ParticleSystemScene } from '../scenes/ParticleSystemScene';
import { GeometricShapesScene } from '../scenes/GeometricShapesScene';

interface TechVideoProps {
  title: string;
  subtitle: string;
  brandColor: string;
  accentColor: string;
  codeSnippet: string;
  logoUrl: string;
  backgroundVideo: string;
}

export const TechVideoComposition: React.FC<TechVideoProps> = ({
  title,
  subtitle,
  brandColor,
  accentColor,
  codeSnippet,
  logoUrl,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const backgroundOpacity = interpolate(
    frame,
    [0, 30, durationInFrames - 30, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)`,
        opacity: backgroundOpacity,
      }}
    >
      {/* Particle System Background */}
      <Sequence from={0} durationInFrames={durationInFrames}>
        <ParticleSystemScene color={brandColor} />
      </Sequence>

      {/* Geometric Shapes */}
      <Sequence from={0} durationInFrames={durationInFrames}>
        <GeometricShapesScene accentColor={accentColor} />
      </Sequence>

      {/* Logo Animation */}
      <Sequence from={0} durationInFrames={300}>
        <LogoAnimationScene logoUrl={logoUrl} brandColor={brandColor} />
      </Sequence>

      {/* Kinetic Typography - Title */}
      <Sequence from={180} durationInFrames={480}>
        <KineticTypographyScene
          text={title}
          fontSize={120}
          color="#FFFFFF"
          strokeColor={brandColor}
          animationType="reveal"
        />
      </Sequence>

      {/* Kinetic Typography - Subtitle */}
      <Sequence from={360} durationInFrames={360}>
        <KineticTypographyScene
          text={subtitle}
          fontSize={60}
          color="#CCCCCC"
          strokeColor={accentColor}
          animationType="wave"
        />
      </Sequence>

      {/* Code Reveal */}
      <Sequence from={600} durationInFrames={600}>
        <CodeRevealScene
          code={codeSnippet}
          language="javascript"
          theme="dark"
          highlightLines={[2, 3, 4]}
        />
      </Sequence>

      {/* Final Logo and Call to Action */}
      <Sequence from={1200} durationInFrames={600}>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            background: `radial-gradient(circle, ${brandColor}20 0%, transparent 70%)`,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: brandColor,
              textAlign: 'center',
              textShadow: `0 0 20px ${brandColor}50`,
            }}
          >
            Experience the Future
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};