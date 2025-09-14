import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { AnimatedChart } from '../components/AnimatedChart';
import { MetricCard } from '../components/MetricCard';

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

interface DataVisualizationSceneProps {
  data: DataPoint[];
}

export const DataVisualizationScene: React.FC<DataVisualizationSceneProps> = ({
  data,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const containerOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        opacity: containerOpacity,
        padding: 60,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 48,
          fontWeight: 'bold',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: 40,
          textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
        }}
      >
        Performance Metrics
      </div>

      {/* Chart */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60%',
        }}
      >
        <AnimatedChart
          data={data}
          frame={frame}
          width={width * 0.6}
          height={height * 0.4}
        />
      </div>

      {/* Metric Cards */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        {data.map((item, i) => (
          <MetricCard
            key={i}
            label={item.label}
            value={item.value}
            color={item.color}
            frame={frame}
            delay={i * 30}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};