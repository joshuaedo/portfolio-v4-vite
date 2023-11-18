import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), 10, 28); // November is 10
    targetDate.setFullYear(currentDate.getFullYear()); // Set the target year to the current year

    const timeDifference = targetDate - currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-5xl font-normal">
        <span>{timeRemaining.days}: </span>
        <span>{timeRemaining.hours}: </span>
        <span>{timeRemaining.minutes}: </span>
        <span>{timeRemaining.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
