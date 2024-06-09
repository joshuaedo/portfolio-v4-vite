import { useEffect } from 'react';
import { gsap } from 'gsap';

const useAnimation = (animationConfig) => {
  useEffect(() => {
    gsap.to(animationConfig.selector, {
      ...animationConfig.settings,
    });
  }, [animationConfig.selector, animationConfig.settings]);
};

export default useAnimation;
