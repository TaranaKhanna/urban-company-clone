import React, { useEffect, useState } from 'react'
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const ImageSlider2 = ({ heading, images }) => {
    const [index, setIndex] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(true);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [visibleCount, setVisibleCount] = useState(window.innerWidth < 640 ? 1 : 5)
    const [visibleImages, setVisibleImages] = useState([]);

    useEffect(() => {
        setVisibleImages(images.slice(index, index + visibleCount));

        setShowLeftArrow(index > 0);
        setShowRightArrow(index + visibleCount < images.length)
    }, [index, visibleCount])

    useEffect(() => {
        const updateVisibleCount = () => {
            setVisibleCount(window.innerWidth < 640 ? 1 : 5);
        }

        window.addEventListener("resize", updateVisibleCount);

        return () => window.removeEventListener("resize", updateVisibleCount);
    }, [])

    const prevSlide = () => {
        setIndex(prev => prev - 1 < 0 ? null : prev -1)
    }
    const nextSlide = () => {
        setIndex(prev => prev + 1 === images.length ? null : prev + 1)
    }

    return (
        <div className='flex flex-col gap-8 mx-32 mb-28'>
            <h1 className='font-semibold text-4xl'>{heading}</h1>
            <div className='flex gap-5 items-center'>
                {showLeftArrow && <IoMdArrowBack onClick={prevSlide}
                    className="absolute left-28 rounded-full bg-white w-10 h-10 p-2 cursor-pointer border border-gray-200" />}
                {
                    visibleImages.map((image, index) => (
                        <div className='flex flex-col gap-3 w-full h-full'>
                            <img src={image.img} key={index} alt="" className='w-full h-full rounded-xl border border-gray-200' />
                            <p className='font-semibold pl-3'>{image.text}</p>
                            <div className='flex flex-col gap-1 text-gray-700 pl-3'>
                            <p className='flex items-center gap-1 text-xs'>{image.star ? < FaStar /> : null} {image.rating}</p>
                            <p className='text-sm'>{image.price}</p>
                            </div>
                        </div>
                        
                    ))
                }
                {showRightArrow && <IoMdArrowForward onClick={nextSlide}
                    className="absolute right-28 rounded-full bg-white w-10 h-10 p-2 cursor-pointer border border-gray-200" />}
            </div>
        </div>
    )
}

export default ImageSlider2