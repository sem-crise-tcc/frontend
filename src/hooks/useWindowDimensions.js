import { useState, useEffect } from 'react';
import { MOBILE_WIDTH } from '../defaults/Breakpoints';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    isMobile: width < MOBILE_WIDTH,
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
