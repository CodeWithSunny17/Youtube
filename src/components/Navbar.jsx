import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='flex h-14 px-12 justify-between items-center bg-black opacity-95 sticky'>
        <div className='flex gap-8 items-center text-2xl'>
            <div>
                <GiHamburgerMenu />
            </div>
            <div className='flex justify-center items-center'>
                <FaYoutube className='text-3xl text-red-600'/>
                <span>Youtube</span>
            </div>
        </div>
        <div>search</div>
        <div>profile</div>
    </div>
  )
}
