import gsap from 'gsap';
import { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 0,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.animation', {
      height: '12vh',
      fontSize: '1.125rem',
      position: 'sticky',
      width: '11.8%',
      top: 0,
      zIndex: 10,
      padding: '1.75rem',
      duration: 2.5,
      delay: 1,
    });
  }, []);

  return (
    <>
      <div
        className={`animation hidden h-[30vh] w-full items-center justify-center text-2xl font-medium md:flex`}
      >
        <div>Joshua Edo</div>
      </div>
      <div className='loader flex h-screen w-full items-center justify-center text-5xl font-medium md:h-[30vh] md:text-9xl'>
        <span className='text-purple-500'>‘</span>
        <Number n={100} />
      </div>
    </>
  );
};
