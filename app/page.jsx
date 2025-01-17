import HomeDesktop from "@/components/Desktop/Home";
import HomeMobile from "@/components/Mobile/Home";

export default function Page() {
  return (
    <div className="">
      {/* Desktop */}
      <div className="max-lg:hidden"><HomeDesktop /></div>

      {/* Mobile */}
      <div className="lg:hidden"><HomeMobile /></div>
    </div>
  );
}
