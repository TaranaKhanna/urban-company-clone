import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <nav className='fixed top-0 w-full border-b-1 border-gray-200 bg-white'>
            <div className='flex justify-between items-center mx-30 my-4'>
                <div className='flex justify-start items-center gap-10'>
                    <img src='/images/logo.webp' alt="logo" className='w-30'/>
                    <ul className='flex justify-center items-center gap-14 m-auto'>
                        <li className='cursor-pointer'><a href="#Beauty">Beauty</a></li>
                        <li className='cursor-pointer'><a href="#Panels">Panels</a></li>
                        <li className='cursor-pointer'><a href="#Native">Native</a></li>
                    </ul>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-2 items-center border-1 border-gray-200 rounded-xl p-3'>
                        <img src="./images/location.png" alt="" className='w-6 h-5' />
                        <input type="text" name="location" placeholder="Connaught Place" />
                    </div>
                    <div className='flex gap-2 items-center border-2 border-gray-200 rounded-xl p-3'>
                        < CiSearch size={20}/>
                        <input type="text" name="location" placeholder="Search for Services" />
                    </div>
                </div>
                <div className='flex gap-6 items-center text-gray-600 text-xl'>
                    <FiShoppingCart size={22} className='cursor-pointer'/>
                    <MdOutlineAccountCircle size={22} className='cursor-pointer'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar