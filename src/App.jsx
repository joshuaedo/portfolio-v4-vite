import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HomeLoader } from "./components/loader/Loading.jsx";
import LenisScroller from "./components/smooth-scroll/LenisScroller.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import { Router } from "./components/router/Router.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import { ScrollToTop } from "./components/smooth-scroll/ScrollToTop.jsx";

export function App() {
  const [loading, setLoading] = useState(true);

  {
    setTimeout(() => {
      setLoading(false);
    }, 4900);
  }

  return (
    <BrowserRouter>
      <div className="bg-black tracking-wider text-white" id="scroller">
        {loading ? (
          <>
            <HomeLoader />
          </>
        ) : (
          <>
            <ScrollToTop>
              <Navbar />
              <MobileNavbar />
              <Cursor />
              <LenisScroller />
              <Router />
              <Footer />
            </ScrollToTop>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
