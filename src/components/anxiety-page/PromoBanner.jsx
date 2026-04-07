import { useState, useEffect } from "react";

function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 3 hours
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (dismissed) return null;

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="bg-[#5200FF] w-full py-3 px-4 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-3 relative">
      <div className="flex items-center gap-2 text-white text-sm font-medium text-center md:text-left">
        <span className="text-lg">🎄</span>
        <span>
          Use code <strong>CANADA</strong> and book within the next 3 hours to get 20% off your session!
        </span>
      </div>
      <div className="flex items-center gap-1 md:ml-4">
        <span className="bg-white/20 text-white font-bold text-sm px-2.5 py-1 rounded-md">{hours}</span>
        <span className="text-white font-bold">:</span>
        <span className="bg-white/20 text-white font-bold text-sm px-2.5 py-1 rounded-md">{minutes}</span>
        <span className="text-white font-bold">:</span>
        <span className="bg-white/20 text-white font-bold text-sm px-2.5 py-1 rounded-md">{seconds}</span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 text-white/70 hover:text-white text-lg"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}

export default PromoBanner;
