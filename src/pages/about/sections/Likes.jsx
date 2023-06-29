export default function Likes() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="relative h-[45vh] w-[50vw] rounded-lg bg-blue-500 text-black shadow-2xl shadow-blue-500/20 md:w-[30vw]">
          <video
            autoPlay
            muted
            loop
            className="h-full w-full rounded-lg object-cover"
          >
            <source src="/videos/rj-celebration.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
