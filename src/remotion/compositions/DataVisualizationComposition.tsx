import React from 'react';
import { AbsoluteFill } from 'remotion';
import { DataVisualizationScene } from '../scenes/DataVisualizationScene';

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

interface DataVisualizationProps {
  data: DataPoint[];
}

export const DataVisualizationComposition: React.FC<DataVisualizationProps> = (props) => {
  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
      <DataVisualizationScene {...props} />
    </AbsoluteFill>
  );
};