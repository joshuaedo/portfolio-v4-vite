import { useState } from "react";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Cursor from "./components/cursor/Cursor.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { Router } from "./components/router/Router.jsx";
import { HomeLoader } from "./components/loader/Loading.jsx";
import GeneralMeta from "./components/meta-tags/GeneralMeta";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar.jsx";
import { ScrollToTop } from "./components/smooth-scroll/ScrollToTop.jsx";
// import LenisScroller from "./components/smooth-scroll/LenisScroller.jsx";
// import LocomotiveScroller from "./components/smooth-scroll/LocomotiveScroller.jsx";

export function App() {
  const [loading, setLoading] = useState(true);

  {
    setTimeout(() => {
      setLoading(false);
    }, 4900);
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="bg-black tracking-wider text-white">
          {loading ? (
            <>
              <HomeLoader />
            </>
          ) : (
            <>
              <HeaderProvider>
                {/* <LenisScroller> */}
                {/* <LocomotiveScroller> */}
                <ScrollToTop>
                  <Header />
                  <Navbar />
                  <MobileNavbar />
                  <Cursor />
                  <Router />
                  <GeneralMeta />
                  <Footer />
                </ScrollToTop>
                {/* </LocomotiveScroller> */}
                {/* </LenisScroller> */}
              </HeaderProvider>
            </>
          )}
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
