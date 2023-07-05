import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HomeLoader } from "./components/loader/Loading.jsx";
// import LenisScroller from "./components/smooth-scroll/LenisScroller.jsx";
import LocomotiveScroll from "./components/smooth-scroll/LocomotiveScroll.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import { Router } from "./components/router/Router.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { ScrollToTop } from "./components/smooth-scroll/ScrollToTop.jsx";
import Header from "./components/header";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";

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
            {/* <LenisScroller> */}
            <HeaderProvider>
              <LocomotiveScroll>
                <ScrollToTop>
                  <Header />
                  <Navbar />
                  <MobileNavbar />
                  <Cursor />
                  <Router />
                  <Footer />
                </ScrollToTop>
              </LocomotiveScroll>
            </HeaderProvider>
            {/* </LenisScroller> */}
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
