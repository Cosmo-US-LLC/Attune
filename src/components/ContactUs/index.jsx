import React, { useEffect } from "react";
import { Button } from "../ui/button";

const ContactUs = () => {

const script = document.createElement("script");
script.src = "https://app.feelattune.com/js/form_embed.js";
script.async = true;
document.body.appendChild(script);
  return (
    <div className="mt-4 mb-4">
      <iframe
        src="https://app.feelattune.com/widget/form/q1rwAi79KIwQRlRF8oRg"
        style={{
          width: "100%",
          minHeight:"850px",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-q1rwAi79KIwQRlRF8oRg"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Dummy Form For GHL Verification"
        data-height="738"
        data-layout-iframe-id="inline-q1rwAi79KIwQRlRF8oRg"
        data-form-id="q1rwAi79KIwQRlRF8oRg"
        title="Dummy Form For GHL Verification"
      ></iframe>
      {/* 
      <div>
        <a href="listener-recruitment">
          <Button className="bg-[#5200FF] rounded-full text-[15px] md:text-[16px] px-8 py-3 flex items-center justify-center">
            Back to home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="ml-2"
            >
              <path
                d="M0.617188 10C0.617188 4.53539 5.03539 0.117188 10.5 0.117188C15.9646 0.117188 20.3828 4.53539 20.3828 10C20.3828 15.4646 15.9646 19.8828 10.5 19.8828C5.03539 19.8828 0.617188 15.4646 0.617188 10ZM19.2201 10C19.2201 5.17486 15.3251 1.27987 10.5 1.27987C5.67486 1.27987 1.77987 5.17486 1.77987 10C1.77987 14.8251 5.67486 18.7201 10.5 18.7201C15.3251 18.7201 19.2201 14.8251 19.2201 10Z"
                fill="white"
              />
              <path
                d="M9.51585 14.8274L14.341 10.0023L9.51585 5.17716L10.3297 4.36328L15.9688 10.0023L10.3297 15.6413L9.51585 14.8274Z"
                fill="white"
              />
              <path
                d="M15.1562 9.4209V10.5836L5.27344 10.5836V9.4209L15.1562 9.4209Z"
                fill="white"
              />
            </svg>
          </Button>
        </a>
      </div> */}
    </div>
  );
};

export default ContactUs;
