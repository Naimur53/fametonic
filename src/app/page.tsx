import Image from "next/image";
import Topbar from "@/components/Topbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
