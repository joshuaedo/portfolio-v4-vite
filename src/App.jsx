// import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
// import { Loading } from "./components/loader/Loading.jsx";
import LenisScroller from "./components/smooth-scroll/LenisScroller.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import { Router } from "./components/router/Router.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar.jsx";
import Footer from "./components/footer/Footer.jsx";

export const App = () => (
  <BrowserRouter>
    <div className="bg-black tracking-wider text-white">
      <Navbar />
      <MobileNavbar />
      <Cursor />
      <LenisScroller />
      <Router />
      <Footer />
    </div>
  </BrowserRouter>
);
