import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypingAnimationOptions {
  text: string;
  typeSpeed?: { min: number; max: number };
  deleteSpeed?: { min: number; max: number };
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  loop?: boolean;
  respectReducedMotion?: boolean;
}

interface UseTypingAnimationReturn {
  displayText: string;
  isTyping: boolean;
  isDeleting: boolean;
  isComplete: boolean;
}

export function useTypingAnimation({
  text,
  typeSpeed = { min: 60, max: 120 },
  deleteSpeed = { min: 40, max: 70 },
  pauseAfterType = 1000,
  pauseAfterDelete = 300,
  loop = true,
  respectReducedMotion = true,
}: UseTypingAnimationOptions): UseTypingAnimationReturn {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const timeoutRef = useRef<number | null>(null);
  const prefersReducedMotion = useRef(false);

  // Check for reduced motion preference
  useEffect(() => {
    if (respectReducedMotion && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      prefersReducedMotion.current = mediaQuery.matches;
      
      const handler = (e: MediaQueryListEvent) => {
        prefersReducedMotion.current = e.matches;
      };
      
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [respectReducedMotion]);

  const getRandomDelay = useCallback((min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const clearCurrentTimeout = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    // If reduced motion is preferred, show full text immediately
    if (prefersReducedMotion.current) {
      setDisplayText(text);
      setIsTyping(false);
      setIsComplete(true);
      return;
    }

    const animate = () => {
      if (isTyping && !isDeleting) {
        // Typing phase
        if (displayText.length < text.length) {
          const delay = getRandomDelay(typeSpeed.min, typeSpeed.max);
          timeoutRef.current = window.setTimeout(() => {
            setDisplayText(text.slice(0, displayText.length + 1));
          }, delay);
        } else {
          // Finished typing, pause then start deleting
          setIsComplete(true);
          if (loop) {
            timeoutRef.current = window.setTimeout(() => {
              setIsTyping(false);
              setIsDeleting(true);
              setIsComplete(false);
            }, pauseAfterType);
          }
        }
      } else if (isDeleting) {
        // Deleting phase
        if (displayText.length > 0) {
          const delay = getRandomDelay(deleteSpeed.min, deleteSpeed.max);
          timeoutRef.current = window.setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, delay);
        } else {
          // Finished deleting, pause then start typing again
          timeoutRef.current = window.setTimeout(() => {
            setIsDeleting(false);
            setIsTyping(true);
          }, pauseAfterDelete);
        }
      }
    };

    animate();

    return clearCurrentTimeout;
  }, [
    displayText,
    isTyping,
    isDeleting,
    text,
    typeSpeed,
    deleteSpeed,
    pauseAfterType,
    pauseAfterDelete,
    loop,
    getRandomDelay,
    clearCurrentTimeout,
  ]);

  return { displayText, isTyping, isDeleting, isComplete };
}
