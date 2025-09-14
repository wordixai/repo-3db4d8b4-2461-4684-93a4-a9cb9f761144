import React from 'react';
import { interpolate } from 'remotion';

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

interface AnimatedChartProps {
  data: DataPoint[];
  frame: number;
  width: number;
  height: number;
}

export const AnimatedChart: React.FC<AnimatedChartProps> = ({
  data,
  frame,
  width,
  height,
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const barWidth = width / data.length * 0.6;
  const barSpacing = width / data.length * 0.4;

  return (
    <svg width={width} height={height}>
      {data.map((item, index) => {
        const animationDelay = index * 30;
        const animationProgress = interpolate(
          frame - animationDelay,
          [0, 60],
          [0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );
        
        const barHeight = (item.value / maxValue) * height * 0.8 * animationProgress;
        const x = index * (barWidth + barSpacing) + barSpacing / 2;
        const y = height - barHeight - 50;
        
        const glowIntensity = interpolate(
          frame,
          [animationDelay + 60, animationDelay + 120],
          [0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <g key={index}>
            {/* Bar */}
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              fill={item.color}
              filter={`drop-shadow(0 0 ${glowIntensity * 10}px ${item.color})`}
            />
            
            {/* Value Label */}
            <text
              x={x + barWidth / 2}
              y={y - 10}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize={14}
              fontWeight="bold"
              opacity={animationProgress}
            >
              {Math.round(item.value * animationProgress)}%
            </text>
            
            {/* Category Label */}
            <text
              x={x + barWidth / 2}
              y={height - 20}
              textAnchor="middle"
              fill="#CCCCCC"
              fontSize={12}
              opacity={animationProgress}
            >
              {item.label}
            </text>
          </g>
        );
      })}
      
      {/* Grid Lines */}
      {[0.25, 0.5, 0.75, 1].map((ratio, index) => (
        <line
          key={index}
          x1={0}
          y1={height - ratio * height * 0.8 - 50}
          x2={width}
          y2={height - ratio * height * 0.8 - 50}
          stroke="#333"
          strokeWidth={1}
          opacity={0.3}
        />
      ))}
    </svg>
  );
};