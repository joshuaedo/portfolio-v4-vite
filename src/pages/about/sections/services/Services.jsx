export default function Services() {
  return (
    <div className="">
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
          className={`relative h-[45vh] w-[70vw] rounded-lg bg-yellow-500 text-black shadow-2xl shadow-yellow-500/20 md:h-[70vh] md:w-[70vw]`}
        >
          <span className="absolute right-12 top-5 z-10 font-medium text-black">
            services↑
          </span>
        </div>
      </div>
    </div>
  );
}
