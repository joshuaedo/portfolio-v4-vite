import { useState } from 'react';
import { inject } from '@vercel/analytics';
import { BrowserRouter } from 'react-router-dom';
import Header, { MobileHeader } from '@/components/layout/header';
import Cursor from '@/components/ui/cursor';
import { Router } from '@/components/layout/router';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { Loader } from '@/components/ui/loader';
import Providers from '@/components/layout/providers';

export function App() {
  const [loading, setLoading] = useState(true);

  {
    setTimeout(() => {
      setLoading(false);
    }, 4900);
  }

  {
    inject();
  }

  return (
    <BrowserRouter>
      <div className='bg-black tracking-wider text-white'>
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <Providers>
              <Header />
              <MobileHeader />
              <Navbar />
              <Cursor />
              <Router />
              <Footer />
            </Providers>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
