// import React, { useEffect, useState } from "react";
// import moment from "moment";

// const CountdownTimer = () => {
//   const storedDeadline = localStorage.getItem("deadline");

//   const deadline = storedDeadline
//     ? moment(storedDeadline)
//     : moment().add(3, "hours");

//   useEffect(() => {
//     if (!storedDeadline) {
//       localStorage.setItem("deadline", deadline.toString());
//     }
//   }, [deadline, storedDeadline]);

//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = moment();
//       const distance = deadline.diff(now);

//       if (distance <= 0) {
//         clearInterval(interval);
//         setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
//         // Optionally clear deadline after expiry if you want to reset for the next visit
//         // localStorage.removeItem('deadline');
//       } else {
//         const duration = moment.duration(distance);
//         setTimeLeft({
//           hours: duration.hours(),
//           minutes: duration.minutes(),
//           seconds: duration.seconds(),
//         });
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [deadline]);

//   return (
//     <div className="bg-[#FF6F61] py-1 flex flex-row max-sm:flex-col justify-center items-center gap-10 max-sm:gap-3">
//       <div className="flex flex-row items-center justify-center gap-10 text-center text-white max-sm:gap-4">
//         <p className="text-[18px] max-sm:text-[12px] max-sm:w-[210px] text-left font-[500]">
//           Get Your First Session Free Of Charge If You Book Within
//         </p>
//         <div className="flex items-center justify-center gap-6 ">
//           <div className="flex flex-col items-center w-[30px] max-sm:w-[15px]  ">
//             <p className="text-[28px] max-sm:text-[20px] font-[500] font-miniature h-[33px] max-sm:h-[100%]  ">
//               {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
//             </p>
//             <p className="text-[12px] max-sm:text-[12px] font-[400] text-[#E5FF7D]">
//               Hours
//             </p>
//           </div>
//           <div className="flex flex-col  items-center w-[30px] max-sm:w-[15px]  ">
//             <p className="text-[28px] font-[500] max-sm:text-[20px] font-miniature h-[33px] max-sm:h-[100%] ">
//               {timeLeft.minutes < 10
//                 ? `0${timeLeft.minutes}`
//                 : timeLeft.minutes}
//             </p>
//             <p className="text-[12px] font-[400] max-sm:text-[12px] text-[#E5FF7D]">
//               Min
//             </p>
//           </div>
//           <div className="flex flex-col items-center w-[30px] max-sm:w-[15px] ">
//             <p className="text-[28px] font-[500] max-sm:text-[20px] font-miniature h-[33px] max-sm:h-[100%]">
//               {timeLeft.seconds < 10
//                 ? `0${timeLeft.seconds}`
//                 : timeLeft.seconds}
//             </p>
//             <p className="text-[12px] font-[400] max-sm:text-[12px] text-[#E5FF7D]">
//               Sec
//             </p>
//           </div>
//         </div>
//       </div>
//       <p className="w-[300px] capitalize leading-[21px] text-[16px] text-white max-sm:text-[13px] max-sm:w-[350px] text-center font-[500]">
//         Use code <strong className="text-[18px] max-sm:text-[13px] font-[700]">Canadian2025</strong> to Claim your 15 min session
//       </p>
//     </div>
//   );
// };

// export default CountdownTimer;

import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import countDownTimerIcon from "../../../public/countDownTimer/Layer_1.svg";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const deadlineRef = useRef(null);

  useEffect(() => {
    const storedDeadline = localStorage.getItem("deadline");

    if (storedDeadline) {
      deadlineRef.current = moment(storedDeadline);
    } else {
      const newDeadline = moment().add(3, "hours");
      deadlineRef.current = newDeadline;
      localStorage.setItem("deadline", newDeadline.toISOString());
    }

    const interval = setInterval(() => {
      const now = moment();
      const distance = deadlineRef.current.diff(now);

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
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
  }, []);

  return (
    <div className="w-full bg-[#5D00FF] h-[50px] max-sm:h-[100px] max-sm:flex-col py-2 px-4 gap-6 max-sm:gap-4 flex items-center justify-center text-white">
      <div className="flex items-center justify-center space-x-2">
        <img
          src={countDownTimerIcon}
          alt="Bell Icon"
          className="w-[28px] h-[28px] max-sm:w-[20px] max-sm:h-[20px] object-contain"
        />

        <span className="text-[16px] max-sm:text-[14px] font-[400] text-[white] leading-[125%] capitalize">
          Use Code <span className="">CANADA</span> And Book Within The Next 3
          Hours To Get 20% Off Your Session!
        </span>
      </div>

      <div className="flex items-center justify-center w-[430px] max-sm:w-[340px]">
        <span className="text-[30px] w-[30%]   max-sm:text-[24px] font-[500] capitalize leading-[66%]">
          {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}{" "}
          <span className="text-[18px] max-sm:text-[14px] font-[500] leading-[20px] capitalize">
            Hours
          </span>
        </span>
        <span className="text-[30px] w-[30%] max-sm:text-[24px] font-[500] capitalize leading-[66%]">
          {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}{" "}
          <span className="text-[18px] max-sm:text-[14px] font-[500] leading-[20px] capitalize">
            Minutes
          </span>
        </span>
        <span className="text-[30px] w-[30%] max-sm:text-[24px] font-[500] capitalize leading-[66%]">
          {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}{" "}
          <span className="text-[18px] max-sm:text-[14px] font-[500] leading-[20px] capitalize">
            Seconds
          </span>
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
