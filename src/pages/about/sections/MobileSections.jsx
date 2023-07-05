import Image from "./../../../components/image/Image.jsx";

export default function MobileSections({
  color,
  className,
  children,
  onMouseLeave,
  onMouseOver,
  onClick,
}) {
  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center lg:hidden">
        <div
          className={`${className} relative h-[34vh] w-[82vw] cursor-pointer rounded-2xl bg-${color}-500 text-black shadow-2xl shadow-${color}-500/20`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function MobileCover({ title, items, src, h, w }) {
  return (
    <div className="relative flex h-full w-full items-end p-5">
      <div className="absolute right-5 top-5 text-3xs">
        <Image
          orgSrc={src}
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
