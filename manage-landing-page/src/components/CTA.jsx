
const CTA = () => {
  return (
    <section className="bg-primary-red">
      <div className="container mx-auto  py-14 relative bg-[url(/images/bg-simplify-section-mobile.svg)] md:bg-[url(/images/bg-simplify-section-desktop.svg)] bg-no-repeat bg-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left md:max-w-md">
            Simplify how your team works today.
          </h2>
          <button className="bg-white text-primary-red px-8 py-3 rounded-full hover:bg-opacity-90 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
