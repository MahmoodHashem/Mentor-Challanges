import imageCurrency from '../assets/images/image-currency.jpg'
import imageRestaurant from '../assets/images/image-restaurant.jpg'
import imagePlane from '../assets/images/image-plane.jpg'
import imageConfetti from '../assets/images/image-confetti.jpg'

export const Articles = () => {
  const articles = [
    {
      image: imageCurrency,
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      excerpt: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …"
    },
    {
      image: imageRestaurant,
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      excerpt: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },
    {
      image: imagePlane,
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      excerpt: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …"
    },
    {
      image: imageConfetti,
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      excerpt: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
    }
  ]

  return (
    <section className="font-publicSans bg-neutral-veryLightGray py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-primary-darkBlue font-light mb-12 text-center md:text-left">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <article key={index} className="bg-neutral-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={article.image} 
                alt="" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-neutral-grayishBlue">
                  By {article.author}
                </span>
                <h3 className="text-primary-darkBlue text-lg mt-2 mb-2 hover:text-primary-limeGreen cursor-pointer transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-grayishBlue text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Articles