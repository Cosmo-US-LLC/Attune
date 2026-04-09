import { useEffect } from "react";
import AnxietyNavbar from "../components/anxiety-page/Navbar";

function SignupAnxiety() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (e) => {
      if (!e.data || !e.data.type) return;

      if (e.data.type === "form_init") {
        window.dataLayer.push({ event: "form_start", form_name: "signup-anxiety" });
      }

      if (e.data.type === "form_submit") {
        window.dataLayer.push({ event: "form_submit", form_name: "signup-anxiety" });
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
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
