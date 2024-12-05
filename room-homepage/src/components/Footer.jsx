const Footer = () => {
    return (
      <div className="flex flex-col md:grid md:grid-cols-12 md:h-[35vh]">
        <div className="md:col-span-4">
          <img 
            src="/images/image-about-dark.jpg" 
            alt="about dark" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 lg:p-12 md:col-span-4 flex flex-col justify-center">
          <h2 className="font-spartan font-bold text-lg md:text-xl mb-4 uppercase">
            About our furniture
          </h2>
          <p className="font-spartan text-primary-darkGray text-sm">
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best expresses your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <div className="md:col-span-4">
          <img 
            src="/images/image-about-light.jpg" 
            alt="about light" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default Footer;
  