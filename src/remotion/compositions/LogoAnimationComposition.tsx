import React from 'react';
import { AbsoluteFill } from 'remotion';
import { LogoAnimationScene } from '../scenes/LogoAnimationScene';

interface LogoAnimationProps {
  logoUrl: string;
  brandColor: string;
  morphTarget: 'circle' | 'square' | 'triangle';
}

export const LogoAnimationComposition: React.FC<LogoAnimationProps> = (props) => {
  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <LogoAnimationScene {...props} />
    </AbsoluteFill>
  );
};