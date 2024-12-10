import { useState } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideDirection, setSlideDirection] = useState('right');

    const slides = [
        {
            image: '/images/desktop-image-hero-1.jpg',
            mobileImage: '/images/mobile-image-hero-1.jpg',
            title: 'Discover innovative ways to decorate',
            description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        },
        {
            image: '/images/desktop-image-hero-2.jpg',
            mobileImage: '/images/mobile-image-hero-2.jpg',
            title: 'We are available all across the globe',
            description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        },
        {
            image: '/images/desktop-image-hero-3.jpg',
            mobileImage: '/images/mobile-image-hero-3.jpg',
            title: 'Manufactured with the best materials',
            description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setSlideDirection('right');

    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setSlideDirection('left');

    };

    return (
        <header className="relative md:h-[65vh] overflow-hidden">
            <div className="flex flex-col md:grid md:grid-cols-12 h-full overflow-hidden">
                <div className={`transition-transform duration-700 ease-in-out transform ${slideDirection === 'right' ? 'translate-x-0' : ''
                    } md:h-[65vh] md:col-span-7 relative`}>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={slides[currentSlide].image} />
                        <img
                            src={slides[currentSlide].mobileImage}
                            alt="hero"
                            className="w-full h-full object-cover transition-opacity duration-700"
                        />
                    </picture>
                    <div className="flex  absolute bottom-0 right-0 lg:-right-[110px] bg-black  px-[5px]  ">
                        <button
                            onClick={prevSlide}
                            className="p-4 md:p-5hover:bg-primary-veryDarkGray transition-colors"
                        >
                            <img src="/images/icon-angle-left.svg" alt="previous" className="w-3 md:w-auto" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-4 md:p-5 hover:bg-primary-veryDarkGray transition-colors"
                        >
                            <img src="/images/icon-angle-right.svg" alt="next" className="w-3 md:w-auto" />
                        </button>
                    </div>
                </div>
                <div className="p-8 md:p-16 md:col-span-5 flex flex-col justify-center">
                    <div className="transform transition-all duration-700 ease-in-out">
                        <h1 className="font-spartan font-bold text-3xl md:text-4xl mb-4 md:mb-6 animate-fade-in">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="font-spartan text-primary-darkGray text-sm md:text-base mb-8 animate-fade-in">
                            {slides[currentSlide].description}
                        </p>
                        <button className="flex items-center space-x-8 hover:text-primary-darkGray transition-colors duration-300">
                            <span className="font-spartan uppercase tracking-[1em] text-sm md:text-base">Shop now</span>
                            <img src="/images/icon-arrow.svg" alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Slider;
