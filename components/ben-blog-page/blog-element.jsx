import CarouselCmp from '../carousel'
import volunteer from '@/assets/imgs/volunteer.jpeg'
import benShirt from '@/assets/imgs/ben-shirt.jpg'
import img3 from '@/assets/imgs/about-img.jpeg'
import img4 from '@/assets/imgs/ben-pic-1.png'
import img5 from '@/assets/imgs/example-img-1.jpeg'

export default function BlogElement({toggleModal, data, idx}) {

  return (
      <>
      <p className='font-bold max-w-fit text-center text-4xl mobile:text-2xl text-width-font-color smMobile:text-medium'>
        {data.title}
      </p>
      {<CarouselCmp data={data} toggleModal={toggleModal} idx={idx}/> }
     </>
  )
}
