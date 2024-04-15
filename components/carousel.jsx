'use clinet'
import 'react-multi-carousel/lib/styles.css';
import '@/styles/modules/carousel.scss'
// import Image from 'next/image';
import { Image } from '@nextui-org/react' 
import Carousel from "react-multi-carousel";


export default function CarouselCmp({srcImg = []}) {


  return (
    <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 0
        },
        items: 4,
        partialVisibilityGutter: 40
      },
      // mobile: {
      //   breakpoint: {
      //     max: 464,
      //     min: 0
      //   },
      //   items: 1,
      //   partialVisibilityGutter: 30
      // },
      // tablet: {
      //   breakpoint: {
      //     max: 1024,
      //     min: 464
      //   },
      //   items: 1,
      //   partialVisibilityGutter: 30
      // }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={true}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={3}
    swipeable
  >
    {srcImg.map((src, idx)=> {
      return (
      <Image
      alt="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
      src={src.src}
      radius='full'
      key={idx}
      className='w-15vw h-15vw object-cover hover:scale-105 hover:cursor-pointer '
      />
  )
    })}
    
    

  </Carousel>
  )
}

