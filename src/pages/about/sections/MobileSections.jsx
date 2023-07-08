export default function MobileSections({
  color,
  className,
  children,
  onMouseLeave,
  onMouseOver,
  onClick,
}) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          className={`${className} relative h-[11rem] w-[16rem] cursor-pointer rounded-2xl transition ease-in-out md:h-[15rem] md:w-[20rem] bg-${color}-500 text-black shadow-2xl shadow-${color}-500/20`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function MobileCover({ title, items, src, h, w, className }) {
  return (
    <div
      className={`${className} relative flex h-full w-full items-end p-5 transition ease-in-out`}
    >
      <div className="absolute right-5 top-5">
        <img
          loading="lazy"
          decoding="async"
          src={src}
          alt="click icon"
          height={h}
          width={w}
          className=""
        />
      </div>
      <div>
        <p className="title-text pb-2 text-2xl">{title}</p>
        <ul className="line-height text-3xs font-medium uppercase">
          <span>{items}</span>
        </ul>
      </div>
    </div>
  );
}
