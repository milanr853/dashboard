import React from 'react'
import { HiPlusCircle } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';


function Header() {
    return (
        <div className="header w-full bg-white h-[80px] px-8 flex items-end">
            <div className='w-full flex justify-between items-center 
            border border-b-gray-100 border-t-0 border-x-0 pb-1'>
                <div className='space-x-4 flex items-center'>
                    <div className='h-[45px] w-[45px] rounded-lg bg-[#f6f6fb]
                flex justify-center items-center font-bold italic text-purple-400'>L</div>
                    <div className='font-semibold'>Boro team</div>
                    <div className='h-[25px] w-[25px] cursor-pointer rounded-md flex justify-center items-center bg-[#f6f6f6]'>
                        <IoMdArrowDropdown />
                    </div>
                    <HiPlusCircle size={24} color='#7166f9' />
                </div>
                <div className='space-x-4 flex items-center'>
                    <FaUserCircle size={45} color='lightgray' />
                    <div className='font-semibold'>Zahra...</div>
                    <div className='h-[25px] w-[25px] cursor-pointer rounded-md flex justify-center items-center bg-[#f6f6f6]'>
                        <IoMdArrowDropdown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header