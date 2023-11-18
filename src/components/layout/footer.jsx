import { useDate } from "@/hooks/use-date.js";

export default function Footer() {
  const { date, time, isTimeVisible } = useDate();
  const currentTime = isTimeVisible ? time : "";

  return (
    <footer className="flex items-center justify-center bg-black pt-4 md:pt-10">
      <div className="w-[90%]">
        <div className="title-text flex h-10 items-center justify-between text-center">
          <p>{date}</p>
          {isTimeVisible && (
            <p className="time hidden md:block">{currentTime}</p>
          )}
          <p className="">C&apos;est Mon Anniversaire!</p>
        </div>
      </div>
    </footer>
  );
}
