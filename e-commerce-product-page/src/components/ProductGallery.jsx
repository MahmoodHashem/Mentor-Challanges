import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import  Lightbox from './Lightbox'

const ProductGallery = ({ onImageSelect }) => {
  const [currentImage, setCurrentImage] = useState(1)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [direction, setDirection] = useState(0)
  

  const images = [
    { id: 1, main: '/images/image-product-1.jpg', thumbnail: '/images/image-product-1-thumbnail.jpg' },
    { id: 2, main: '/images/image-product-2.jpg', thumbnail: '/images/image-product-2-thumbnail.jpg' },
    { id: 3, main: '/images/image-product-3.jpg', thumbnail: '/images/image-product-3-thumbnail.jpg' },
    { id: 4, main: '/images/image-product-4.jpg', thumbnail: '/images/image-product-4-thumbnail.jpg' }
  ]

  const handleImageSelect = (id) => {
    setCurrentImage(id)
    onImageSelect(id)
  }

  
  const nextImage = () => {
    setCurrentImage(prev => prev === 4 ? 1 : prev + 1)
    setDirection(1)
  }

  const prevImage = () => {
    setCurrentImage(prev => prev === 1 ? 4 : prev - 1)
    setDirection(-1)
  }


  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? -20 : 20,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? -20 : 20,
      opacity: 0
    })
  }


  return (
    <div className="w-full  relative md:-top-10 lg:w-1/3 md:p-4">
      <div className="relative  aspect-square">

      <button 
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2  z-10 bg-white rounded-full  p-4 shadow-md w-10 aspect-square "
          onClick={prevImage}
        >
          <img src="/images/icon-previous.svg" alt="previous" className='w-3 ' />
        </button>
        
        <button 
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-md w-10 aspect-square "
          onClick={nextImage}
        >
          <img src="/images/icon-next.svg" alt="next" className='w-3 ' />
        </button>


        <AnimatePresence custom={direction} mode="wait">
          <motion.img 
            onClick={() => setIsLightboxOpen(true)}
            key={currentImage}
            src={images.find(img => img.id === currentImage).main}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="md:rounded-2xl cursor-pointer w-full absolute top-0 left-0"
          />
        </AnimatePresence>

        <div className="hidden  md:grid grid-cols-4 gap-4 mt-8 relative top-full  pt-8">
          {images.map((image) => (
            <motion.button
              key={image.id}
              className={`relative transition-all rounded-xl overflow-hidden cursor-pointer ${currentImage === image.id ? 'border-2 border-Orange' : ''
                }`}
              onClick={() => handleImageSelect(image.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.thumbnail}
                alt={`thumbnail ${image.id}`}
                className={`w-full ${currentImage === image.id ? 'opacity-50' : 'hover:opacity-70'}`}
              />
            </motion.button>
          ))}
        </div>
      </div>
      <Lightbox 
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        currentImage={currentImage}
        images={images}
        onPrev={prevImage}
        onNext={nextImage}
        onThumbnailClick={(id) => setCurrentImage(id)}
        variants={variants}
        direction={direction}
      />
    </div>
  )
}


export default ProductGallery