import { useCurrentFrame } from 'remotion';

interface AnimationStep {
  startFrame: number;
  endFrame: number;
  easing?: (t: number) => number;
}

export const useAnimationSequence = (steps: AnimationStep[]) => {
  const frame = useCurrentFrame();
  
  const getCurrentStep = () => {
    return steps.findIndex(step => 
      frame >= step.startFrame && frame <= step.endFrame
    );
  };
  
  const getProgress = (stepIndex: number) => {
    if (stepIndex === -1) return 0;
    
    const step = steps[stepIndex];
    const progress = (frame - step.startFrame) / (step.endFrame - step.startFrame);
    
    if (step.easing) {
      return step.easing(Math.max(0, Math.min(1, progress)));
    }
    
    return Math.max(0, Math.min(1, progress));
  };
  
  const isStepActive = (stepIndex: number) => {
    return getCurrentStep() === stepIndex;
  };
  
  const isStepComplete = (stepIndex: number) => {
    return getCurrentStep() > stepIndex;
  };
  
  return {
    currentStep: getCurrentStep(),
    getProgress,
    isStepActive,
    isStepComplete,
    frame,
  };
};