/**
 * Three coach photo panels — node 4141:809
 * Each panel is 480×477px. Photos use overflow-clip like in Figma.
 * The stat circles live in EaseCare.jsx and overlap UP into this section.
 */
function Stats() {
  return (
    <section className="w-full bg-white grid grid-cols-3 overflow-hidden h-[477px] gap-0">
      {/* Left */}
      <div className="overflow-hidden relative w-full h-full">
        <img
          src="/about-us/stats/coach-phone-new.webp"
          alt="Person using FeelAttune app"
          className="object-cover absolute inset-0 w-full h-full"
        />
      </div>

      {/* Centre */}
      <div className="overflow-hidden relative w-full h-full">
        <img
          src="/about-us/stats/coach-laptop-new.webp"
          alt="Life coach on video call"
          className="object-cover absolute inset-0 w-full h-full"
        />
      </div>

      {/* Right */}
      <div className="overflow-hidden relative w-full h-full">
        <img
          src="/about-us/stats/coach-headset-new.webp"
          alt="Life coach with headset"
          className="object-cover absolute inset-0 w-full h-full"
        />
      </div>
    </section>
    // <section className="flex overflow-hidden w-full bg-white max-lg:hidden" style={{ height: 477 }}>

    //   {/* Left — person holding phone (rotated -10.51deg), with feelAttune logo overlay */}
    //   <div className="overflow-hidden relative flex-shrink-0" style={{ width: 480, height: 477 }}>
    //     {/* Rotated phone photo */}
    //     <div
    //       className="flex absolute justify-center items-center"
    //       style={{
    //         left: "calc(50% - 8.22px)",
    //         top: "calc(50% + 18.59px)",
    //         width: 704.938,
    //         height: 788.186,
    //         transform: "translate(-50%, -50%)",
    //       }}
    //     >
    //       <div style={{ transform: "rotate(-10.51deg)", flexShrink: 0 }}>
    //         <div style={{ width: 588.515, height: 692.464, position: "relative", overflow: "hidden" }}>
    //           <img
    //             src="/about-us/stats/coach-phone-new.webp"
    //             alt="Person using FeelAttune app"
    //             className="absolute max-w-none"
    //             style={{ width: "99.93%", height: "99.88%", top: "0.05%", left: "0.06%" }}
    //           />
    //           {/* Gradient fade at bottom */}
    //           <div
    //             className="absolute inset-0"
    //             style={{
    //               backgroundImage:
    //                 "linear-gradient(190.51deg, rgba(0,0,0,0) 66.797%, rgba(0,0,0,0.2) 83.781%)",
    //             }}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     {/* FeelAttune logo badge overlay */}
    //     <div className="absolute" style={{ left: 111.85, top: 67.46, width: 132.581, height: 44.118 }}>
    //       <img
    //         src="/about-us/stats/attune-logo.webp"
    //         alt="FeelAttune"
    //         className="object-contain w-full h-full"
    //       />
    //     </div>
    //   </div>

    //   {/* Centre — man with headset at laptop */}
    //   <div className="overflow-hidden relative flex-shrink-0" style={{ width: 480, height: 477 }}>
    //     <img
    //       src="/about-us/stats/coach-laptop-new.webp"
    //       alt="Life coach on video call"
    //       className="object-bottom absolute inset-0 max-w-none pointer-events-none"
    //       style={{ width: "100%", height: "100%" }}
    //     />
    //   </div>

    //   {/* Right — woman with headset */}
    //   <div className="overflow-hidden relative flex-shrink-0" style={{ width: 480, height: 477 }}>
    //     <img
    //       src="/about-us/stats/coach-headset-new.webp"
    //       alt="Life coach with headset"
    //       className="absolute max-w-none"
    //       style={{ width: "138.2%", height: "113.41%", top: 0, left: "-25.04%" }}
    //     />
    //   </div>

    // </section>
  );
}

export default Stats;
