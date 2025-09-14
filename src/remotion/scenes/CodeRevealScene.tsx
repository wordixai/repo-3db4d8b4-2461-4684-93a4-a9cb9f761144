import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { TypewriterText } from '../components/TypewriterText';
import { SyntaxHighlighter } from '../components/SyntaxHighlighter';

interface CodeRevealSceneProps {
  code: string;
  language: string;
  theme: 'dark' | 'light';
  highlightLines?: number[];
}

export const CodeRevealScene: React.FC<CodeRevealSceneProps> = ({
  code,
  language,
  theme,
  highlightLines = [],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const containerScale = interpolate(frame, [0, 60], [0.8, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const glowIntensity = interpolate(
    frame,
    [0, 60, 120],
    [0, 1, 0.7],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        background: theme === 'dark' ? '#0d1117' : '#ffffff',
      }}
    >
      <div
        style={{
          opacity: containerOpacity,
          transform: `scale(${containerScale})`,
          background: theme === 'dark' ? '#161b22' : '#f6f8fa',
          borderRadius: 12,
          padding: 40,
          border: `2px solid ${theme === 'dark' ? '#30363d' : '#d1d9e0'}`,
          boxShadow: `0 0 ${glowIntensity * 50}px rgba(0, 217, 255, ${glowIntensity * 0.3})`,
          maxWidth: '80%',
          maxHeight: '80%',
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: theme === 'dark' ? '#58a6ff' : '#0969da',
            marginBottom: 20,
            fontFamily: 'SF Mono, Monaco, Consolas, monospace',
          }}
        >
          {language.toUpperCase()} ANIMATION
        </div>
        
        <TypewriterText
          text={code}
          fps={fps}
          charactersPerFrame={2}
          style={{
            fontSize: 18,
            fontFamily: 'SF Mono, Monaco, Consolas, monospace',
            lineHeight: 1.6,
            color: theme === 'dark' ? '#e6edf3' : '#24292f',
          }}
        >
          <SyntaxHighlighter
            language={language}
            theme={theme}
            highlightLines={highlightLines}
          />
        </TypewriterText>
      </div>
    </AbsoluteFill>
  );
};