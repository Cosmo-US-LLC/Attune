import React, { useEffect, useState } from "react";
import moment from "moment";

const CountdownTimer = () => {
  const storedDeadline = localStorage.getItem("deadline");

  const deadline = storedDeadline
    ? moment(storedDeadline)
    : moment().add(3, "hours");

  useEffect(() => {
    if (!storedDeadline) {
      localStorage.setItem("deadline", deadline.toString());
    }
  }, [deadline, storedDeadline]);

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const distance = deadline.diff(now);

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        // Optionally clear deadline after expiry if you want to reset for the next visit
        // localStorage.removeItem('deadline');
      } else {
        const duration = moment.duration(distance);
        setTimeLeft({
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="bg-[#FF6F61] py-1 flex items-center justify-center text-white text-center gap-10 max-sm:gap-4 ">
      <p className="text-[18px] max-sm:text-[12px] max-sm:w-[192px] text-left font-[500]">
        Get Your First Session Free Of Charge If You Book Within
      </p>
      <div className="flex items-center justify-center gap-6 ">
        <div className="flex flex-col items-center w-[30px] max-sm:w-[15px]  ">
          <p className="text-[28px] max-sm:text-[20px] font-[500] font-miniature h-[33px] max-sm:h-[100%]  ">
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          </p>
          <p className="text-[12px] max-sm:text-[12px] font-[400] text-[#E5FF7D]">Hours</p>
        </div>
        <div className="flex flex-col  items-center w-[30px] max-sm:w-[15px]  ">
          <p className="text-[28px] font-[500] max-sm:text-[20px] font-miniature h-[33px] max-sm:h-[100%] ">
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
          </p>
          <p className="text-[12px] font-[400] max-sm:text-[12px] text-[#E5FF7D]">Min</p>
        </div>
        <div className="flex flex-col items-center w-[30px] max-sm:w-[15px] ">
          <p className="text-[28px] font-[500] max-sm:text-[20px] font-miniature h-[33px] max-sm:h-[100%]">
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </p>
          <p className="text-[12px] font-[400] max-sm:text-[12px] text-[#E5FF7D]">Sec</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
