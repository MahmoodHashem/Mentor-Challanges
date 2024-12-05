import  { useState } from 'react'
import arrowIcon from '../assets/images/icon-arrow.svg'

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-t border-neutral-grayishBlue/20">
    <button
      className="flex items-center justify-between w-full py-4 text-left hover:text-primary-softRed"
      onClick={onClick}
    >
      <h3 className="text-neutral-veryDarkBlue font-normal">{question}</h3>
      <img 
        src={arrowIcon} 
        alt="Toggle answer" 
        className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div className={`transition-all duration-200 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'} overflow-hidden`}>
      <p className="text-neutral-grayishBlue pb-4">
        {answer}
      </p>
    </div>
  </div>
)

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: "What is Bookmark?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
      question: "How can I request a new browser?",
      answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies."
    },
    {
      question: "Is there a mobile app?",
      answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus."
    },
    {
      question: "What about other Chromium browsers?",
      answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-neutral-veryDarkBlue mb-6">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md mx-auto text-neutral-grayishBlue">
            Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
          <div className="border-b border-neutral-grayishBlue/20"></div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-softBlue text-white px-8 py-3 rounded-md hover:bg-white hover:text-primary-softBlue border-2 border-primary-softBlue transition duration-200">
            More Info
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
