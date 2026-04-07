import { useEffect, useRef } from "react";
import AnxietyNavbar from "../components/anxiety-page/Navbar";

function SignupAnxiety() {
  const formStarted = useRef(false);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    // Detect form_start when user first interacts with the form
    const handleFormStart = () => {
      if (!formStarted.current) {
        formStarted.current = true;
        window.dataLayer.push({ event: "form_start", form_name: "signup-anxiety" });
      }
    };

    const formContainer = document.getElementById("fillout-form-container");
    if (formContainer) {
      formContainer.addEventListener("click", handleFormStart);
      formContainer.addEventListener("focusin", handleFormStart);
    }

    // Listen for Fillout submit event via postMessage
    const handleMessage = (e) => {
      if (e.data && (e.data.type === "fillout-form-submitted" || e.data === "fillout-form-submitted")) {
        window.dataLayer.push({ event: "form_submit", form_name: "signup-anxiety" });
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
      if (formContainer) {
        formContainer.removeEventListener("click", handleFormStart);
        formContainer.removeEventListener("focusin", handleFormStart);
      }
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden pt-[90px]">
      <AnxietyNavbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div
          id="fillout-form-container"
          style={{ width: "100%", height: "500px" }}
          data-fillout-id="3PUtd6ie97us"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        ></div>
      </div>
    </div>
  );
}

export default SignupAnxiety;
