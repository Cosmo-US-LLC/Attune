import HomeMobile from "@/components/Mobile/Home";

export default function Home() {
  return (
    <div className="">
      {/* Desktop */}
      <div className="max-lg:hidden"></div>

      {/* Mobile */}
      <div className="lg:hidden"><HomeMobile /></div>
    </div>
  );
}
