import React from "react";

const handleScroll = (event, targetId, offset) => {
  event.preventDefault();

  const targetElement = document.getElementById(targetId);
  console.log(targetElement);

  if (targetElement) {
    // Position relative to the document
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;

    // Adjust position with offset
    const offsetPosition = elementPosition - offset;

    console.log("Element Position Relative to Document:", elementPosition);
    console.log("Offset Position:", offsetPosition);

    // Smooth scroll to the target position
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.error(`Element with ID "${targetId}" not found`);
  }
};

function FooterMobile() {
  return (
    <div className="relative min-h-[738px] bg-[#E5DDD4] px-5 py-[30px] overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-row items-start justify-start relative">
          <h1 className="text-left font-miniature text-[38px]">
            Talk to a <br />
            professional
          </h1>
          <img
            src="/mobile/logo_footer.svg"
            alt="Logo"
            className="absolute top-0 right-0 w-[81px] h-[43px]"
          />
        </div>
        <p className="mt-6 text-[15px]">
          Looking for someone to listen? Our trained Listeners are here to
          provide non-judgmental, compassionate support whenever you need it.
          Whether you’re managing stress, navigating life transitions, or simply
          craving a connection, we’re here to help.
        </p>
        <div className="relative mt-8 flex flex-row justify-between items-center">
          <div className="flex flex-col gap-4 font-[500]">
            <a href="#Mpathtosupport2">
              Path To Support
            </a>
            <a href="#Mhowitworks2">
              How It Works
            </a>
            <a href="#Mourapproach2">
              Our Approach
            </a>
            <a href="#Mfaqs2">
              FAQs
            </a>
          </div>
          <img
            src="/mobile/footer/footer_heart.svg"
            alt="Time"
            className="w-[134px] h-[107px]"
          />
        </div>
        <div className="flex justify-between items-center py-0 mt-6">
          <div className="flex flex-row items-center justify-center gap-4">
            <a href="https://www.linkedin.com/company/easecare/">
              <img
                src="/mobile/footer/linkedIn.svg"
                alt="linkedIn"
                className=""
              />
            </a>
            <a href="https://www.facebook.com/easecare.ca">
              <img
                src="/mobile/footer/facebook.svg"
                alt="facebook"
                className=""
              />
            </a>
            <a href="https://www.instagram.com/easecare.ca/">
              <img
                src="/mobile/footer/instagram.svg"
                alt="instagram"
                className=""
              />
            </a>
          </div>

          <a href="https://innovacare.tech/listenerhub/signup">
            <button className="bg-[#5200FF] text-white px-[10px] h-[38px] my-0 min-w-[112px] rounded-full text-[15px] whitespace-nowrap">
              Get Started
            </button>
          </a>
        </div>
        <p className="mt-5 text-left">© 2024 Attune. All Rights Reserved</p>
        <div className="my-4 border-[0.5px] border-[black] w-full" />
        <p className="mt-4 text-left text-[14px] capitalize">
          We would like to acknowledge the traditional, ancestral, and unceded
          territory of the many First Nations, Metis, and Inuit who have lived
          and cared for the lands known as Canada for generations. We are
          grateful for the traditional knowledge keepers and elders who are
          still with us today and those who have gone before us. We make this
          acknowledgment as an act of reconciliation and gratitude to those
          whose territory we reside on.
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 flex items-center">
        <h1 className="font-miniature text-center w-full text-[#ded6ce] text-[35vw] z-0">
          Att<span className="italic">une</span>
        </h1>
      </div>
    </div>
  );
}

export default FooterMobile;
