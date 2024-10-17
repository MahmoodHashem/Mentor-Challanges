/* eslint-disable no-unused-vars */


import desktopHero from '../assets/images/image-hero-desktop.jpg'
import mobileHero from '../assets/images/image-hero-desktop.jpg'

import Nav from './Nav'


export default function Header() {

    return (
        <header
            className='
        h-3/6 font-CommissionerRegular
        md:bg-desktop-hero-pattern  bg-mobile-hero-pattern
        bg-no-repeat bg-cover lg:px-28 px-12 py-8 shadow-inset
        text-3xl
        ' >
            <Nav />
        </header>


    )
}