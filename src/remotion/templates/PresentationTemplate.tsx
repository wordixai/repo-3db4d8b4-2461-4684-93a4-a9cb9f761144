import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { KineticTypographyScene } from '../scenes/KineticTypographyScene';
import { DataVisualizationScene } from '../scenes/DataVisualizationScene';
import { LogoAnimationScene } from '../scenes/LogoAnimationScene';

interface Slide {
  type: 'title' | 'content' | 'data' | 'logo';
  title?: string;
  content?: string[];
  data?: Array<{ label: string; value: number; color: string }>;
  logoUrl?: string;
  duration: number;
}

interface PresentationTemplateProps {
  slides: Slide[];
  brandColor: string;
  accentColor: string;
}

export const PresentationTemplate: React.FC<PresentationTemplateProps> = ({
  slides,
  brandColor,
  accentColor,
}) => {
  let currentFrame = 0;

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
      {slides.map((slide, index) => {
        const startFrame = currentFrame;
        const duration = slide.duration;
        currentFrame += duration;
        
        return (
          <Sequence key={index} from={startFrame} durationInFrames={duration}>
            {slide.type === 'title' && slide.title && (
              <KineticTypographyScene
                text={slide.title}
                fontSize={90}
                color="#FFFFFF"
                strokeColor={brandColor}
                animationType="reveal"
              />
            )}
            
            {slide.type === 'data' && slide.data && (
              <DataVisualizationScene data={slide.data} />
            )}
            
            {slide.type === 'logo' && slide.logoUrl && (
              <LogoAnimationScene
                logoUrl={slide.logoUrl}
                brandColor={brandColor}
              />
            )}
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};