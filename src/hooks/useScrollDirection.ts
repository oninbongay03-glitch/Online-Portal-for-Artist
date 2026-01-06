'use client'

import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('initial'); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        setScrollDirection('initial');
      } 
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); 
  return scrollDirection;
};

export default useScrollDirection;