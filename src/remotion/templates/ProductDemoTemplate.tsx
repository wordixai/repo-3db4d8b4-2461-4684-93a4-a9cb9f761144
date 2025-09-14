import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { KineticTypographyScene } from '../scenes/KineticTypographyScene';
import { CodeRevealScene } from '../scenes/CodeRevealScene';
import { DataVisualizationScene } from '../scenes/DataVisualizationScene';

interface ProductDemoTemplateProps {
  productName: string;
  tagline: string;
  features: string[];
  codeExample: string;
  metrics: Array<{ label: string; value: number; color: string }>;
  brandColor: string;
  accentColor: string;
}

export const ProductDemoTemplate: React.FC<ProductDemoTemplateProps> = ({
  productName,
  tagline,
  features,
  codeExample,
  metrics,
  brandColor,
  accentColor,
}) => {
  return (
    <AbsoluteFill style={{ background: '#000' }}>
      {/* Product Name Animation */}
      <Sequence from={0} durationInFrames={180}>
        <KineticTypographyScene
          text={productName}
          fontSize={100}
          color="#FFFFFF"
          strokeColor={brandColor}
          animationType="explosion"
        />
      </Sequence>
      
      {/* Tagline */}
      <Sequence from={120} durationInFrames={240}>
        <KineticTypographyScene
          text={tagline}
          fontSize={48}
          color="#CCCCCC"
          strokeColor={accentColor}
          animationType="wave"
        />
      </Sequence>
      
      {/* Code Example */}
      <Sequence from={300} durationInFrames={420}>
        <CodeRevealScene
          code={codeExample}
          language="javascript"
          theme="dark"
        />
      </Sequence>
      
      {/* Metrics */}
      <Sequence from={660} durationInFrames={600}>
        <DataVisualizationScene data={metrics} />
      </Sequence>
    </AbsoluteFill>
  );
};