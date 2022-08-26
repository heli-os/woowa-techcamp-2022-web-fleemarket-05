import { useEffect, useRef } from 'react';

export function useInfinityScroll(callback: () => void) {
  const observer = useRef<IntersectionObserver | null>(null);

  const observe = (element: HTMLElement) => {
    observer.current?.observe(element);
  };

  const unobserve = (element: HTMLElement) => {
    observer.current?.unobserve(element);
  };

  const createObserver = (callback: () => void) => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      {
        threshold: 0.7,
        rootMargin: '-90% 0px 0px 0px',
      }
    );
  };

  useEffect(() => {
    createObserver(callback);
    return () => {
      observer.current?.disconnect();
    };
  }, [callback]);

  return { observe, unobserve };
}
