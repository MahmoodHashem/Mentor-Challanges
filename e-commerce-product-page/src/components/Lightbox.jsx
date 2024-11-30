import { motion, AnimatePresence } from 'framer-motion'

const Lightbox = ({ isOpen, onClose, currentImage, images, onPrev, onNext, onThumbnailClick, direction, variants }) => {



  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="hidden sm:flex fixed inset-0 bg-black bg-opacity-75 z-50 h-full  items-center justify-center"
          custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
        >
          <div className="relative  max-w-md w-full p-8">
            <button 
              className="absolute -top-2 right-8 z-10"
              onClick={onClose}
            >
              <img src="/images/icon-close.svg" alt="close" className="w-5  filter brightness-0 invert" />
            </button>

            <div className="relative w-full aspect-square  ">
              <button 
                className="absolute z-50  -left-6 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 aspect-square flex items-center justify-center"
                onClick={onPrev}
              >
                <img src="/images/icon-previous.svg" alt="previous" className='w-3 ' />
              </button>

              <motion.img 
                key={currentImage}
                src={images.find(img => img.id === currentImage).main}
                alt="product" 
                className="rounded-2xl w-full"
                custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
              />

              <button 
                className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 aspect-square flex items-center justify-center"
                onClick={onNext}
              >
                <img src="/images/icon-next.svg" alt="next" className='w-3 ' />
              </button>
            </div>

            <div className="grid  grid-cols-4 gap-4 mt-8 px-12">
              {images.map((image) => (
                <motion.button
                  key={image.id} 
                  className={`relative rounded-xl overflow-hidden cursor-pointer ${
                    currentImage === image.id ? 'border-2 border-Orange' : ''
                  }`}
                  onClick={() => onThumbnailClick(image.id)}
                  whileHover={{ scale: 1.05 }}
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Lightbox
