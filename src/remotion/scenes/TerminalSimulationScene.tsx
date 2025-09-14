import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { TerminalWindow } from '../components/TerminalWindow';

interface TerminalSimulationSceneProps {
  commands: string[];
}

export const TerminalSimulationScene: React.FC<TerminalSimulationSceneProps> = ({
  commands,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const containerScale = interpolate(frame, [0, 60], [0.9, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0d1117',
      }}
    >
      <div
        style={{
          opacity: containerOpacity,
          transform: `scale(${containerScale})`,
          width: '80%',
          height: '70%',
        }}
      >
        <TerminalWindow
          commands={commands}
          frame={frame}
          fps={fps}
        />
      </div>
    </AbsoluteFill>
  );
};