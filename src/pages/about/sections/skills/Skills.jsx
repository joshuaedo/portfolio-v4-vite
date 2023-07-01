export default function Skills() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="relative h-[45vh] w-[70vw] rounded-lg bg-green-500 text-black shadow-2xl shadow-green-500/20 md:w-[30vw]">
          <video
            autoPlay
            muted
            loop
            className="h-full w-full rounded-lg object-cover"
          >
            <source src="/videos/next-logo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
