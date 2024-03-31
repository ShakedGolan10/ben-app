import About from "@/components/about";
import BenBlogTeaser from "@/components/ben-blog-teaser";
import HomePageHero from "@/components/home-page-hero";
import InHisWay from "@/components/in-his-way";
import MainHeroImg from "@/components/main-hero-img";
import StoriesSection from "@/components/stories-sections";

export default function HomePage() {
  return (
    <>
      <MainHeroImg />
      <HomePageHero />
      <About />
      <StoriesSection />
      <InHisWay />
      <BenBlogTeaser />
    </>
  );
}
