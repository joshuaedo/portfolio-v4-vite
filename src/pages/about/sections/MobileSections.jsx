export default function MobileSections({ color, className, children }) {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center lg:hidden">
        <div
          className={`${className} h-[34vh] w-[82vw] cursor-pointer rounded-2xl bg-${color}-500 text-black shadow-2xl shadow-${color}-500/20`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
