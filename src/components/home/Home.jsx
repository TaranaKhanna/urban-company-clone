import React from 'react'
import Navbar from '../Navbar'
import ImageSlider1 from './ImageSlider1'
import ImageSlider2 from './ImageSlider2'

const Home = () => {

    const images1 = [{ img: "./images/imageSlider2/img1.jpg", text: "Wall Panels" }, { img: "./images/imageSlider2/img2.webp", text: "Native Water Purifier" }, { img: "./images/imageSlider2/img3.jpg", text: "Native Smart Locks" }, { img: "./images/imageSlider2/img4.webp", text: "Kitchen Cleaning" }, { img: "./images/imageSlider2/img5.jpg", text: "Spa Ayurveda" }, { img: "./images/imageSlider2/img6.webp", text: "Hair Studio for Women" }, { img: "./images/imageSlider2/img7.webp", text: "AC service & Repair" }];

    const images2 = [{ img: "./images/imageSlider2/img8.jpg", text: "At-home consultation", star: "FaStar", rating: "4.80(1K)", price: "₹49" },
    { img: "./images/imageSlider2/img9.webp", text: "Intese cleaning (2 bathrooms)", star: "FaStar", rating: "4.78(2M)", price: "₹1,038" },
    { img: "./images/imageSlider2/img10.webp", text: "Haircut for men", star: "FaStar", rating: "4.88(486K)", price: "₹259" },
    { img: "./images/imageSlider2/img11.webp", text: "Pest control (insludes utensil removal)", star: "FaStar", rating: "4.79(99K)", price: "₹1098" },
    { img: "./images/imageSlider2/img12.jpg", text: "Swedish stress relief massage", star: "FaStar", rating: "4.84(166K)", price: "₹1,299" },
    { img: "./images/imageSlider2/img13.jpg", text: "Deep tissue pain relief massage", star: "FaStar", rating: "4.84(107K)", price: "₹1,449"},
    { img: "./images/imageSlider2/img14.webp", text: "Apartment pest control (excludes utensil removal)", star: "FaStar", rating: "4.81(131K)", price: "₹1,299" },
    { img: "./images/imageSlider2/img15.webp", text: "Apartment pest control (includes utensil removal)", star: "FaStar", rating: "4.81(26K)", price: "₹1,498" },
    { img: "./images/imageSlider2/img16.webp", text: "Sofa cleaning", star: "FaStar", rating: "4.86(487K)", price: "₹549" },
    { img: "./images/imageSlider2/img17.webp", text: "Classic cleaning (2 bathrooms)", star: "FaStar", rating: "4.83(1.3M)", price: "₹898" }]

    return (
        <>
            <Navbar />
            <div className='flex justify-center items-center mt-16 mx-8'>
                <div className='mb-10 mt-16'>
                    <h1 className='font-sans font-semibold text-4xl w-100 mt-3'>Home services at your doorstep</h1>
                    <div className='border border-gray-200 p-6 rounded-lg mt-10 w-[90%] md:w-[80%]'>
                        <h3 className='text-xl text-gray-600 font-semibold mb-6'>What are you looking for?</h3>
                        <div className='grid grid-cols-3 gap-5 text-center'>
                            <div className='rounded flex flex-col text-center text-xs mb-5'>
                                <img src="./images/womenSpa.webp" alt="" className='w-full h-20 rounded' />
                                <p>Women's Salon & Spa</p>
                            </div>
                            <div className='rounded flex flex-col text-center text-xs mb-5'>
                                <img src="./images/MenSalon.webp" alt="" className='w-full h-20 rounded' />
                                <p>Men's Salon & Massage</p>
                            </div>
                            <div className='rounded flex flex-col text-center text-xs mb-5'>
                                <img src="./images/AC.webp" alt="" className='w-full h-20 rounded' />
                                <p>AC & Appliance Repair</p>
                            </div>
                            <div className='rounded flex flex-col text-center text-xs mb-5'>
                                <img src="./images/cleaning.webp" alt="" className='w-full h-20 rounded' />
                                <p>Cleaning & Pest Control</p>
                            </div>
                            <div className='rounded flex flex-col text-center text-xs mb-5'>
                                <img src="./images/electronic.webp" alt="" className='w-full h-20 rounded' />
                                <p>Electrician, Plumber & Carpenter</p>
                            </div>
                            <div className='rounded flex flex-col text-center text-xs mb-5'>
                                <img src="./images/waterPurifier.webp" alt="" className='w-full h-20 rounded' />
                                <p>Native Water Purifier</p>
                            </div>
                            <div className='col-span-3 flex gap-5'>
                                <div className='rounded flex flex-col text-center text-xs mb-5 w-1/2'>
                                    <img src="./images/wallsPainting.webp" alt="" className='w-full h-20 rounded' />
                                    <p>Walls & Rooms Painting</p>
                                </div>
                                <div className='w-1/2 rounded flex flex-col text-center text-xs mb-5'>
                                    <img src="./images/wallPanels.webp" alt="" className='w-full h-20 rounded' />
                                    <p>Wall Panels</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-full'>
                    <img src="./images/H1.webp" alt="" width={650} />
                </div>
            </div>
            <div className='flex gap-22 ml-[9%] mb-10 mt-10'>
                <div className='flex gap-3'>
                    <img src="./images/star.webp" alt="" className='h-12' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-xl'>4.8</h1>
                        <p className='text-gray-600 text-sm'>Service Rating</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src="./images/customers.webp" alt="" className='w-12' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-xl'>12M+</h1>
                        <p className='text-gray-600 text-sm'>Customers Globally</p>
                    </div>
                </div>
            </div>

            <ImageSlider1 />
            <ImageSlider2 heading={"New and noteworthy"} images={images1} />
            <ImageSlider2 heading={"Most booked services"} images={images2} />

            <div className='mx-32 px-10 mb-28 bg-transparent overflow-hidden cursor-pointer'>
                <img src="/images/wall-panels.webp" alt="" className='w-full h-full object-cover transition-transform duration-300 hover:scale-104 rounded-xl' />
            </div>
            <div className='flex flex-col gap-8 mx-32 mb-28'>
            <h1 className='font-semibold text-4xl'>Salon for women</h1>
            <div className='flex gap-5 items-center'>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s1.webp" alt="" className='w-70 h-70 rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Waxing</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s2.webp" alt="" className='w-70 h-70  rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Cleanup</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s3.webp" alt="" className='w-70 h-70  rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Manicure</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s4.webp" alt="" className='w-70 h-70  rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Hair care</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s5.webp" alt="" className='w-70 h-70  rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Threading & face waxing</p>
                </div>
            </div>
            </div>

            <div className='flex flex-col gap-8 mx-32 mb-28'>
                <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-4xl'>Spa for women</h1>
                <p className='text-gray-600 text-md'>Refresh. Rewind. Rejuvenate.</p>
                </div>
            <div className='flex gap-5 items-center'>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s6.webp" alt="" className='w-70 h-70 rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Srress relief</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s7.webp" alt="" className='w-70 h-70  rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Pain relief</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s8.jpg" alt="" className='w-70 h-70  rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Natural skincare</p>
                </div>
            </div>
            </div>

            <div className='mx-32 px-10 mb-28 bg-transparent overflow-hidden cursor-pointer'>
                <img src="/images/smartLocks.webp" alt="" className='w-full h-full object-cover transition-transform duration-300 hover:scale-104 rounded-xl' />
            </div>

            <div className='flex flex-col gap-8 mx-32 mb-28'>
                <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-4xl'>Massage for men</h1>
                <p className='text-gray-600 text-md'>Curated massages by top therapists.</p>
                </div>
            <div className='flex gap-5 items-center'>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s9.webp" alt="" className='w-70 h-70 rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Srress relief</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s10.webp" alt="" className='w-70 h-70  rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Pain relief</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                <img src="/images/salon-spa/s11.webp" alt="" className='w-70 h-70  rounded-xl border border-gray-200' />
                <p className='font-semibold pl-3'>Natural skincare</p>
                </div>
            </div>
            </div>

            <div className='mx-32 px-10 mb-28 bg-transparent overflow-hidden cursor-pointer'>
                <img src="/images/water-purifier-2.0.webp" alt="" className='w-full h-full object-cover transition-transform duration-300 hover:scale-104 rounded-xl' />
            </div>
        </>
    )
}

export default Home