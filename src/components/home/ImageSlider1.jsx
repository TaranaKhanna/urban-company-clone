import React, { useEffect, useState } from 'react'
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const ImageSlider1 = () => {

  const images = ["./images/imageSlider1/img1.webp", "./images/imageSlider1/img2.webp", "./images/imageSlider1/img3.webp", "./images/imageSlider1/img4.webp", "./images/imageSlider1/img5.webp", "./images/imageSlider1/img6.webp", "./images/imageSlider1/img7.webp", "./images/imageSlider1/img8.webp", "./images/imageSlider1/img9.webp"]

  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [visibleCount, setVisibleCount] = useState(window.innerWidth < 640 ? 1 : 3);


  useEffect(() => {
    setVisibleImages(images.slice(index, index + visibleCount))

    setShowLeftArrow(index > 0);
    setShowRightArrow(index + visibleCount < images.length);
  }, [index, visibleCount]);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 640 ? 1 : 3);
    }

    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [])


  const prevSlide = () => {
    setIndex(prev => Math.max(0, prev - visibleCount));
      setShowRightArrow(true);
    
  }

  const nextSlide = () => {
    setIndex(prev => Math.min(images.length - visibleCount, prev + visibleCount));
      setShowLeftArrow(true);
   
  }


  return (
    <>
      <div className='flex mx-32 gap-5 items-center mb-27 mt-24 animate-out slide-out-to-top slide-out-to-left'>
        {
          showLeftArrow && (<IoMdArrowBack onClick={prevSlide}
            className="absolute left-27 rounded-full bg-white w-10 h-10 p-2 cursor-pointer border border-gray-200" />)
        }
        {
          visibleImages.map((img, index) => (
            <img src={img} alt="" key={index} className='w-full h-full object-cover flex-1 rounded-xl animate-out slide-out-to-top slide-out-to-left' />
          ))
        }
        {
          showRightArrow && (<IoMdArrowForward onClick={nextSlide}
            className="absolute right-27 rounded-full bg-white w-10 h-10 p-2 cursor-pointer border border-gray-200" />)
        }
      </div>
    </>
  )
}

export default ImageSlider1