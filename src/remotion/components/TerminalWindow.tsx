import React from 'react';
import { interpolate } from 'remotion';

interface TerminalWindowProps {
  commands: string[];
  frame: number;
  fps: number;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  commands,
  frame,
  fps,
}) => {
  const commandsPerSecond = 0.5;
  const currentCommandIndex = Math.floor(frame / (fps / commandsPerSecond));
  const visibleCommands = commands.slice(0, currentCommandIndex + 1);
  
  const cursorBlink = Math.floor(frame / 30) % 2 === 0;

  return (
    <div
      style={{
        background: '#0d1117',
        border: '1px solid #30363d',
        borderRadius: 8,
        padding: 20,
        fontFamily: 'SF Mono, Monaco, Consolas, monospace',
        fontSize: 16,
        color: '#e6edf3',
        height: '100%',
        overflow: 'hidden',
        boxShadow: '0 0 50px rgba(0, 217, 255, 0.2)',
      }}
    >
      {/* Terminal Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 20,
          paddingBottom: 10,
          borderBottom: '1px solid #30363d',
        }}
      >
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27ca3f' }} />
        </div>
        <div style={{ marginLeft: 'auto', color: '#8b949e', fontSize: 14 }}>
          Terminal
        </div>
      </div>

      {/* Command Output */}
      <div style={{ lineHeight: 1.6 }}>
        {visibleCommands.map((command, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <div style={{ color: '#58a6ff' }}>
              $ {command}
            </div>
            {index < visibleCommands.length - 1 && (
              <div style={{ color: '#7d8590', marginTop: 5, marginLeft: 20 }}>
                {command.includes('✓') ? '✓ Success' : 'Processing...'}
              </div>
            )}
          </div>
        ))}
        
        {/* Cursor */}
        {cursorBlink && (
          <span style={{ color: '#58a6ff' }}>$ |</span>
        )}
      </div>
    </div>
  );
};