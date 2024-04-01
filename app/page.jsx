import About from "@/components/about";
import BenBlogTeaser from "@/components/ben-blog-teaser";
import PageHero from "@/components/page-hero";
import InHisWay from "@/components/in-his-way";
import BackgroundImage from "@/components/background-img";
import StoriesSection from "@/components/stories-sections";
import heroImg from '@/assets/imgs/benHeroImg.jpeg'
import nameImg from '@/assets/imgs/ben-name-title.png'

export default function HomePage() {
  return (
    <>
      <BackgroundImage imgSrc={heroImg} adjustImageStyleTailwindString={'lg:object-heroImg '}/>
      <PageHero subTitle={'הילד עם החיוך הנצחי...'} titleImgSrc={nameImg} absoluteAdjustmentTailwindString={'-top-10vh right-0vw'}/>
      <About />
      <StoriesSection />
      <InHisWay />
      <BenBlogTeaser />
    </>
  );
}
