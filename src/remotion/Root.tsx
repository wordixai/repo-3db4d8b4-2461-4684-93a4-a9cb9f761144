import React from 'react';
import { Composition, Folder } from 'remotion';
import { TechVideoComposition } from './compositions/TechVideoComposition';
import { CodeRevealComposition } from './compositions/CodeRevealComposition';
import { LogoAnimationComposition } from './compositions/LogoAnimationComposition';
import { KineticTypographyComposition } from './compositions/KineticTypographyComposition';
import { TerminalSimulationComposition } from './compositions/TerminalSimulationComposition';
import { DataVisualizationComposition } from './compositions/DataVisualizationComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Main Compositions">
        <Composition
          id="TechVideo"
          component={TechVideoComposition}
          durationInFrames={1800}
          fps={60}
          width={1920}
          height={1080}
          defaultProps={{
            title: "Advanced Tech Demo",
            subtitle: "Dynamic Video Creation with Remotion",
            brandColor: "#00D9FF",
            accentColor: "#FF6B6B",
            codeSnippet: `const animation = {
  duration: 2000,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "translateY(0px)"
};`,
            logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop",
            backgroundVideo: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
          }}
        />
      </Folder>

      <Folder name="Individual Animations">
        <Composition
          id="CodeReveal"
          component={CodeRevealComposition}
          durationInFrames={600}
          fps={60}
          width={1920}
          height={1080}
          defaultProps={{
            code: `function createAnimation() {
  const timeline = gsap.timeline();
  
  timeline
    .from(".element", { 
      opacity: 0, 
      y: 50, 
      duration: 1.2,
      ease: "power3.out"
    })
    .to(".element", {
      scale: 1.1,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)"
    });
    
  return timeline;
}`,
            language: "javascript",
            theme: "dark",
          }}
        />

        <Composition
          id="LogoAnimation"
          component={LogoAnimationComposition}
          durationInFrames={300}
          fps={60}
          width={1920}
          height={1080}
          defaultProps={{
            logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop",
            brandColor: "#00D9FF",
            morphTarget: "circle",
          }}
        />

        <Composition
          id="KineticTypography"
          component={KineticTypographyComposition}
          durationInFrames={480}
          fps={60}
          width={1920}
          height={1080}
          defaultProps={{
            text: "DYNAMIC VIDEO CREATION",
            fontSize: 120,
            color: "#FFFFFF",
            strokeColor: "#00D9FF",
          }}
        />

        <Composition
          id="TerminalSimulation"
          component={TerminalSimulationComposition}
          durationInFrames={720}
          fps={60}
          width={1920}
          height={1080}
          defaultProps={{
            commands: [
              "npm install remotion",
              "remotion preview",
              "Building amazing videos...",
              "✓ Render complete!"
            ],
          }}
        />

        <Composition
          id="DataVisualization"
          component={DataVisualizationComposition}
          durationInFrames={900}
          fps={60}
          width={1920}
          height={1080}
          defaultProps={{
            data: [
              { label: "Performance", value: 95, color: "#00D9FF" },
              { label: "Scalability", value: 87, color: "#FF6B6B" },
              { label: "Reliability", value: 92, color: "#4ECDC4" },
              { label: "Innovation", value: 98, color: "#45B7D1" },
            ],
          }}
        />
      </Folder>
    </>
  );
};