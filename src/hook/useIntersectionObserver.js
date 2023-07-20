import { useRef } from 'react';

const useIntersectionObserver = (callback) => {
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            console.log('도달하였습니다');
          }
        });
      },
      { threshold: 0.2 }
    )
  );

  const observe = (element) => {
    observer.current.observe(element);
  };

  const unobserve = (element) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
};

export default useIntersectionObserver;
