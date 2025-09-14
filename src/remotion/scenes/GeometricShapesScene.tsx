import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { GeometricShape } from '../components/GeometricShape';

interface GeometricShapesSceneProps {
  accentColor: string;
}

export const GeometricShapesScene: React.FC<GeometricShapesSceneProps> = ({
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();

  const shapes = [
    { type: 'triangle', x: 0.2, y: 0.3, size: 100, speed: 0.5 },
    { type: 'square', x: 0.8, y: 0.2, size: 80, speed: 0.7 },
    { type: 'circle', x: 0.1, y: 0.8, size: 60, speed: 0.3 },
    { type: 'hexagon', x: 0.9, y: 0.7, size: 90, speed: 0.6 },
    { type: 'triangle', x: 0.5, y: 0.1, size: 70, speed: 0.4 },
  ];

  const globalOpacity = interpolate(
    frame,
    [0, 60, durationInFrames - 60, durationInFrames],
    [0, 0.3, 0.3, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ opacity: globalOpacity }}>
      {shapes.map((shape, i) => (
        <GeometricShape
          key={i}
          type={shape.type as any}
          x={shape.x * width}
          y={shape.y * height}
          size={shape.size}
          color={accentColor}
          frame={frame}
          speed={shape.speed}
          index={i}
        />
      ))}
    </AbsoluteFill>
  );
};