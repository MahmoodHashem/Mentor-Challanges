
const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center mt-16 gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
          Bring everyone together to build better products
        </h1>
        <p className="text-neutral-grayishBlue mb-8">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
        </p>
        <button className="bg-primary-red text-white px-6 py-3 rounded-full hover:opacity-80">
          Get Started
        </button>
      </div>

      <div className="flex-1">
        <img src="/images/illustration-intro.svg" alt="Hero Illustration" />
      </div>
    </section>
  )
}

export default Hero
