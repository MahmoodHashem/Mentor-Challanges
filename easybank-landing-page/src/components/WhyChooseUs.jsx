import iconOnline from '../assets/images/icon-online.svg'
import iconBudgeting from '../assets/images/icon-budgeting.svg'
import iconOnboarding from '../assets/images/icon-onboarding.svg'
import iconApi from '../assets/images/icon-api.svg'

export const WhyChooseUs = () => {
  const features = [
    {
      icon: iconOnline,
      title: "Online Banking",
      description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
      icon: iconBudgeting,
      title: "Simple Budgeting",
      description: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
    },
    {
      icon: iconOnboarding,
      title: "Fast Onboarding",
      description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
      icon: iconApi,
      title: "Open API",
      description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
  ]

  return (
    <section className="font-publicSans bg-neutral-lightGrayishBlue py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left md:max-w-xl">
          <h2 className="text-3xl md:text-4xl text-primary-darkBlue font-light mb-5">
            Why choose Easybank?
          </h2>
          <p className="text-neutral-grayishBlue text-body mb-14">
            We leverage Open Banking to turn your bank account into your financial hub. 
            Control your finances like never before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center md:text-left">
              <img src={feature.icon} alt="" className="mx-auto md:mx-0 mb-6" />
              <h3 className="text-xl text-primary-darkBlue mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-grayishBlue text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default WhyChooseUs