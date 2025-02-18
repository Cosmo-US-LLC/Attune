import { useEffect } from "react";

const useFavicon = () => {
  useEffect(() => {
    console.log("🟢 useFavicon Hook Initialized");

    const favicon = document.getElementById("favicon");

    if (!favicon) {
      console.warn("⚠️ Favicon element not found!");
      return;
    }

    const updateFavicon = (e) => {
      try {
        // Reverse behavior: Light mode -> Dark favicon | Dark mode -> Light favicon
        const newFavicon = e.matches ? "/favicon-light.svg" : "/favicon-dark.svg";

        console.log(`🌗 System Mode Detected: ${e.matches ? "Dark Mode" : "Light Mode"}`);
        console.log(`🔄 Updating Favicon to: ${newFavicon}`);

        // Force browser to refresh the favicon
        setTimeout(() => {
          favicon.setAttribute("href", newFavicon);
          console.log("✅ Favicon Updated Successfully");
        }, 100); // Delay to ensure it applies
      } catch (error) {
        console.error("❌ Failed to update favicon:", error);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Force check if dark mode (including incognito)
    const prefersDark = mediaQuery.matches || window.matchMedia("(prefers-color-scheme: no-preference)").matches;

    updateFavicon({ matches: prefersDark });

    // Listen for changes
    mediaQuery.addEventListener("change", updateFavicon);

    return () => {
      mediaQuery.removeEventListener("change", updateFavicon);
      console.log("🔴 useFavicon Hook Cleaned Up");
    };
  }, []);
};

export default useFavicon;












// import { useEffect } from "react";

// const useFavicon = () => {
//   useEffect(() => {
//     const favicon = document.getElementById("favicon");

//     if (!favicon) return;

//     const updateFavicon = (e) => {
//       try {
//         // REVERSE behavior: Light mode -> Dark favicon | Dark mode -> Light favicon
//         const newFavicon = e.matches ? "/favicon-light.svg" : "/favicon-dark.svg";

//         // Change favicon only if it's different from the current one
//         if (favicon.getAttribute("href") !== newFavicon) {
//           favicon.setAttribute("href", newFavicon);
//         }
//       } catch (error) {
//         console.error("Failed to update favicon:", error);
//       }
//     };

//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//     // Force check if dark mode (including incognito)
//     const prefersDark = mediaQuery.matches || window.matchMedia("(prefers-color-scheme: no-preference)").matches;

//     updateFavicon({ matches: prefersDark });

//     // Listen for changes
//     mediaQuery.addEventListener("change", updateFavicon);

//     return () => {
//       mediaQuery.removeEventListener("change", updateFavicon);
//     };
//   }, []);
// };

// export default useFavicon;
