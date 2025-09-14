import React from 'react';
import { AbsoluteFill } from 'remotion';
import { KineticTypographyScene } from '../scenes/KineticTypographyScene';

interface KineticTypographyProps {
  text: string;
  fontSize: number;
  color: string;
  strokeColor: string;
}

export const KineticTypographyComposition: React.FC<KineticTypographyProps> = (props) => {
  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <KineticTypographyScene
        {...props}
        animationType="reveal"
      />
    </AbsoluteFill>
  );
};