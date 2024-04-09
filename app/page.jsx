import About from "@/components/about";
import BenBlogTeaser from "@/components/ben-blog-teaser";
import HisWayTeaser from "@/components/his-way-teaser";
import BackgroundImage from "@/components/background-img";
import StoriesSection from "@/components/stories-sections";
import heroImg from '@/assets/imgs/home-hero-img.jpeg'
import nameImg from '@/assets/imgs/ben-name-title.png'
import HomePageHero from "@/components/home-page-hero";

export default function HomePage() {
  return (
    <>
      <BackgroundImage imgSrc={heroImg} adjustImageStyleTailwindString={'lg:object-heroImg object-cover'}/>
      <HomePageHero subTitle={'הילד עם החיוך הנצחי...'} titleImgSrc={nameImg} buttonTitle="להוספת סיפור משותף" 
      mainArticleAdjustmentTailwindString={'-top-10vh right-0vw'} subTitleAdjustmentTailwindString="smMobile:hidden"/>
      <About />
      <StoriesSection />
      <HisWayTeaser />
      <BenBlogTeaser />
    </>
  );
}
