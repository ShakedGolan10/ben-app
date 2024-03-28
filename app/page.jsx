import HomePageHero from "@/components/HOME-PAGE-HERO";
import About from "@/components/about";
import MainHeroImg from "@/components/main-hero-img";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="full">
      <HomePageHero>
        <MainHeroImg />
      </HomePageHero>
      <About />
    </main>
  );
}
