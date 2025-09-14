import React from 'react';
import { AbsoluteFill } from 'remotion';
import { TerminalSimulationScene } from '../scenes/TerminalSimulationScene';

interface TerminalSimulationProps {
  commands: string[];
}

export const TerminalSimulationComposition: React.FC<TerminalSimulationProps> = (props) => {
  return (
    <AbsoluteFill style={{ background: '#0d1117' }}>
      <TerminalSimulationScene {...props} />
    </AbsoluteFill>
  );
};