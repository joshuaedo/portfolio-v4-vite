import MobileSections from "../MobileSections.jsx";

export default function Services() {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full justify-end text-center">
          <ul className="mb-5 text-xs">
            <li>blogs</li>
            <li>portfolios</li>
            <li>entertainment websites</li>
            <li>e-commerce websites</li>
            <li>custom websites</li>
          </ul>
        </div>

        <div
          className={`:w-[70vw] relative h-[70vh] rounded-lg bg-yellow-500 shadow-2xl shadow-yellow-500/20`}
        >
          <span className="absolute right-12 top-5 font-medium text-black">
            services↑
          </span>
          <div className="flex h-full w-full items-center justify-center text-center">
            <div className="max-w-[70%]">
              <div className="header-text text-black">HAVE AN IDEA?</div>
              <a href="mailto:joshua.edo01@gmail.com">
                <p className="title-text link mt-2 text-black decoration-black ">
                  Get In Touch ↗
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileServices() {
  return (
    <MobileSections color="yellow">
      <div className="flex h-full w-full items-center justify-center text-center">
        <div className="max-w-[70%]">
          <div className="header-text text-black">HAVE AN IDEA?</div>
          <a href="mailto:joshua.edo01@gmail.com">
            <p className="title-text link mt-2 text-black decoration-black ">
              Get In Touch ↗
            </p>
          </a>
        </div>
      </div>
    </MobileSections>
  );
}
