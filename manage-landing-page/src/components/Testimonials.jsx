import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'


const Testimonials = () => {
  
  const testimonials = [
    {
      id: 1,
      name: "Anisha Li",
      image: "/images/avatar-anisha.png",
      text: "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
    },
    {
      id: 2,
      name: "Ali Bravo",
      image: "/images/avatar-ali.png",
      text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
    },
    {
      id: 3,
      name: "Richard Watts",
      image: "/images/avatar-richard.png",
      text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!"
    },
    {
      id: 4,
      name: "Shanai Gough",
      image: "/images/avatar-shanai.png",
      text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
    }
  ]

  return (
    <section className="py-24 px-6">
    <h2 className="text-4xl font-bold text-primary-blue text-center mb-24">
      What they&apos;ve said
    </h2>

    {/* Desktop View */}
    <div className="hidden p-6  md:block">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col shadow-lg items-center justify-center bg-neutral-lightGray p-6 rounded-lg h-80 ">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16 -mt-12 mb-4"
              />
              <h3 className="font-bold text-primary-blue mb-4">{testimonial.name}</h3>
              <p className="text-neutral-grayishBlue text-center">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Mobile View */}
    <div className="md:hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center bg-neutral-lightGray p-6 rounded-lg">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16  mb-4"
              />
              <h3 className="font-bold text-primary-blue mb-4">{testimonial.name}</h3>
              <p className="text-neutral-grayishBlue text-center">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="text-center mt-12">
      <button className="bg-primary-red text-white px-8 py-3 rounded-full hover:opacity-80">
        Get Started
      </button>
    </div>
  </section>
  )
}

export default Testimonials
