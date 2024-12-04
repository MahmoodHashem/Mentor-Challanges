import IllustrationWorking from '../assets/images/illustration-working.svg'

export default function Hero() {
  return (
    <section className="container mx-auto  px-6 py-10 md:pb-28">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold font-poppins text-neutral-very-dark-violet leading-tight mb-4">
            More than just shorter links
          </h1>
          <p className="text-neutral-grayish-violet text-body mb-8 md:max-w-md">
            Build your brand&apos;s recognition and get detailed insights on how your links are performing.
          </p>
          <button className="bg-primary-cyan hover:opacity-70 text-white font-poppins font-bold px-10 py-3 rounded-full">
            Get Started
          </button>
        </div>
        
        <div className="md:w-1/2 md:translate-x-24">
          <img 
            src={IllustrationWorking} 
            alt="Person working at desk illustration" 
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
