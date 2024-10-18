/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import logo from '../assets/images/logo-mastercraft.svg'
import bookmark from '../assets/images/icon-bookmark.svg'
import activeBookmark from '../assets/images/icon-bookmark-active.svg'
import { useState } from 'react'

export default function Intro({openModal, selected}){


    const [isbookmark, setIsBookmark] = useState(false)


    return (
        <section className="relative bg-white -mt-14 w-full md:w-[40rem] m-auto p-7 rounded-2xl text-center   ">
            <img src={logo} className='absolute -top-6 left-2/4 -translate-x-2/4' alt="mastercraft logo" />
            <h1
             className='
                text-3xl font-bold m-3
            ' >Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-dark-gray font-normal' >A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="btns mt-12 w-full flex items-center justify-between">
                <button onClick={()=> openModal('')} className="btn  bg-dark-cyan box-border h-12 font-bold rounded-full py-3 px-8  text-white">
                    Back this project
                </button>
                <button onClick={()=> setIsBookmark(prev => !prev)}  className="
                btn relative flex items-center content-between bg-gray-100 w-auto sm:w-48 p-0 sm:p-3 box-border h-12 rounded-full text-dark-gray font-bold">
                   <img  src={isbookmark ? activeBookmark : bookmark} className='sm:absolute static left-0 w-16 sm:w-12' alt="bookmark icon" />
                   <p className='ml-auto hidden sm:block mr-3 text-lg' >{isbookmark ?  "Bookmarked" : "Bookmark"}</p> 
                </button>
            
            </div>
        </section>
    )
}