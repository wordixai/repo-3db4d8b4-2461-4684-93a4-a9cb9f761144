import React from 'react';
import { AbsoluteFill } from 'remotion';
import { CodeRevealScene } from '../scenes/CodeRevealScene';

interface CodeRevealProps {
  code: string;
  language: string;
  theme: 'dark' | 'light';
  highlightLines?: number[];
}

export const CodeRevealComposition: React.FC<CodeRevealProps> = (props) => {
  return (
    <AbsoluteFill style={{ background: '#0d1117' }}>
      <CodeRevealScene {...props} />
    </AbsoluteFill>
  );
};