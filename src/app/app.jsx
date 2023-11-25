import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Cursor from '@/components/ui/cursor';
import Footer from '@/components/layout/footer';
import Providers from '@/components/layout/providers';
import { Home } from './pages/home';
import CountdownTimer from '@/components/ui/counter';

export function App() {
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const checkIsBirthday = () => {
      const currentDate = new Date();
      const isBirthdayToday =
        currentDate.getDate() === 28 && currentDate.getMonth() === 10; // Months are 0-indexed, so November is 10.
      setIsBirthday(isBirthdayToday);
    };
    checkIsBirthday();
    const intervalId = setInterval(checkIsBirthday, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='bg-black tracking-wider text-white'>
      {!isBirthday ? (
        <>
          <CountdownTimer />
        </>
      ) : (
        <>
          <Providers>
            <Header />
            <Cursor />
            <Home />
            <Footer />
          </Providers>
        </>
      )}
    </div>
  );
}
