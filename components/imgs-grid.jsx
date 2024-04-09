import { Image } from '@nextui-org/react' 


export default function ImgsGrid ({ images, numOfImagesPerRow, imageSize, toggleMemory }) { // imageSize: {width: num, height: num}
  const templateRows = `grid-cols-${numOfImagesPerRow} gap-2vw` // Custom template

  return (
    <div className={`grid ${templateRows} justify-items-center`}>
      {images.map((image) => (
          <Image
            alt='author-image'
            key={image.id}
            src={image.url}
            width={'5vw'}
            height={'5vh'}
            className='object-contain'
            onClick={() => toggleMemory(image.id)}
          />
          ))}
        
    </div>
  );
};

