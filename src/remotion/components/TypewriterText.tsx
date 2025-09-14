import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface TypewriterTextProps {
  text: string;
  fps: number;
  charactersPerFrame?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  fps,
  charactersPerFrame = 1,
  style,
  children,
}) => {
  const frame = useCurrentFrame();
  
  const charsToShow = Math.floor(frame * charactersPerFrame / (fps / 60));
  const visibleText = text.slice(0, charsToShow);
  
  const showCursor = Math.floor(frame / 30) % 2 === 0;

  return (
    <div style={style}>
      <span>{visibleText}</span>
      {charsToShow < text.length && showCursor && (
        <span style={{ opacity: 0.8 }}>|</span>
      )}
      {children}
    </div>
  );
};