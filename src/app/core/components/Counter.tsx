import React, { useEffect, useState, useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isVisible = useOnScreen(ref as React.RefObject<HTMLElement>);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      // Calculate ease-out progress
      const percentage = Math.min(progress / duration, 1);
      // Ease out quartic formula: 1 - (1 - t)^4
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      const currentCount = Math.floor(easeOut * end);
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};