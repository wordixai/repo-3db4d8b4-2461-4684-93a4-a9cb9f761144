import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { TerminalSimulationScene } from '../scenes/TerminalSimulationScene';
import { CodeRevealScene } from '../scenes/CodeRevealScene';
import { KineticTypographyScene } from '../scenes/KineticTypographyScene';

interface TutorialStep {
  title: string;
  code?: string;
  commands?: string[];
  duration: number;
}

interface TutorialTemplateProps {
  title: string;
  steps: TutorialStep[];
  brandColor: string;
}

export const TutorialTemplate: React.FC<TutorialTemplateProps> = ({
  title,
  steps,
  brandColor,
}) => {
  let currentFrame = 0;

  return (
    <AbsoluteFill style={{ background: '#0d1117' }}>
      {/* Title */}
      <Sequence from={0} durationInFrames={180}>
        <KineticTypographyScene
          text={title}
          fontSize={80}
          color="#FFFFFF"
          strokeColor={brandColor}
          animationType="reveal"
        />
      </Sequence>
      
      {/* Tutorial Steps */}
      {steps.map((step, index) => {
        const startFrame = currentFrame + 180;
        const duration = step.duration;
        currentFrame += duration;
        
        return (
          <React.Fragment key={index}>
            {/* Step Title */}
            <Sequence from={startFrame} durationInFrames={60}>
              <KineticTypographyScene
                text={step.title}
                fontSize={48}
                color="#58a6ff"
                strokeColor={brandColor}
                animationType="reveal"
              />
            </Sequence>
            
            {/* Step Content */}
            <Sequence from={startFrame + 60} durationInFrames={duration - 60}>
              {step.code ? (
                <CodeRevealScene
                  code={step.code}
                  language="javascript"
                  theme="dark"
                />
              ) : step.commands ? (
                <TerminalSimulationScene commands={step.commands} />
              ) : null}
            </Sequence>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};