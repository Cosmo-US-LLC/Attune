import { useId } from "react";

/** Figma 4473:1798 — “Floating Button”; text ring rotates slowly clockwise (dev annotation). */
function CertifiedLifeCoachesSeal() {
  const pathId = `hero-life-coaching-certified-text-path-${useId().replace(/:/g, "")}`;

  return (
    <div
      className="relative size-[128px] shrink-0"
      role="img"
      aria-label="Certified life coaches"
    >
      <div className="absolute inset-0 rounded-full bg-[#e8fc8a]" aria-hidden />
      <div className="absolute inset-[10px] rounded-full bg-white" aria-hidden />
      <svg
        className="absolute inset-0 size-full overflow-visible animate-[spin_28s_linear_infinite] motion-reduce:animate-none"
        viewBox="0 0 128 128"
        aria-hidden
      >
        <defs>
          <path
            id={pathId}
            d="M 64,64 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            fill="none"
          />
        </defs>
        <text
          fill="#0d0d0d"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="12"
          fontWeight="700"
          letterSpacing="0.06em"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {`CERTIFIED LIFE COACHES • CERTIFIED LIFE COACHES • `}
          </textPath>
        </text>
      </svg>
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-[28px] leading-none"
        aria-hidden
      >
        ⭐
      </div>
    </div>
  );
}

export default CertifiedLifeCoachesSeal;
