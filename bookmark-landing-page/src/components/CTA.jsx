import  { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CTA = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError("Whoops, email can't be empty")
      return
    }

    if (!validateEmail(email)) {
      setError('Whoops, make sure it\'s an email')
      return
    }

    setError('')
    toast.success('Thanks for subscribing!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    setEmail('')
  }

  return (
    <section className="bg-primary-softBlue py-20">
      <ToastContainer />
      <div className="container mx-auto px-6">
        <div className="text-center text-white max-w-lg mx-auto">
          <p className="uppercase tracking-widest text-sm mb-8">35,000+ Already Joined</p>
          <h2 className="text-3xl font-medium mb-8">
            Stay up-to-date with what we&apos;re doing
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 md:gap-4 items-center justify-center">
            <div className="w-full md:w-auto">
              <div className={`bg-white rounded-md ${error ? 'ring-2 ring-primary-softRed' : ''}`}>
                <input 
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full md:w-80 px-6 py-3 rounded-md focus:outline-none text-neutral-veryDarkBlue"
                />
              </div>
              {error && (
                <div className="bg-primary-softRed text-white text-xs italic text-left p-2 rounded-b-md">
                  {error}
                </div>
              )}
            </div>
            <button 
              type="submit"
              className="w-full md:w-auto bg-primary-softRed text-white px-8 py-3 rounded-md hover:bg-white hover:text-primary-softRed border-2 border-primary-softRed transition duration-200"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
