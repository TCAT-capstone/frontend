import { useEffect, useState } from 'react';

const useInfiniteScroll = () => {
  const [target, setTarget] = useState();
  const [apiTrigger, setApiTrigger] = useState(0);

  const onIntersect = async ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setApiTrigger((prev) => prev + 1);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.4 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return { apiTrigger, setTarget };
};

export default useInfiniteScroll;
