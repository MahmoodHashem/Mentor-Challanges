

import error from '../assets/images/error.png'


const Footer = () => {
    return (
        <footer className="p-10 md:px-28 lg:px-32   bg-raisinBlack  text-white text-center" >
            <div className='lg:flex gap-10 text-start' >

                <div className='flex-1'> 
                    <h2 className="text-4xl md:text-[4rem] font-bold my-3 lg:my-12">Contact</h2>
                    <p className="text-lightSilver md:text-xl ">
                        I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
                    </p>
                </div>


                <form action="/" className="flex flex-col gap-10 text-start flex-1 my-10">
                    <div className='input-control relative text-start '>
                        <label htmlFor="name" className="opacity-0 transition-all  absolute">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            id="name"
                            required
                            className="placeholder:uppercase placeholder:font-bold  font-bold pl-6 pb-3 w-full  border-b  outline-none bg-transparent transition-all"
                        />

                        <img src={error} alt="error icon" className='w-6 absolute right-0 top-0 hidden' />
                    </div>

                    <div className='input-control relative '>
                        <label htmlFor="email" className="opacity-0 transition-all absolute">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="name"
                            required
                            className=":border-red-500 placeholder:uppercase placeholder:font-bold  font-bold pl-6 pb-3 w-full  border-b outline-none bg-transparent transition-all"
                        />

                        <img src={error} alt="error icon" className=' w-6 absolute right-0 top-0 hidden' />
                    </div>

                    <div className='input-control relative'>
                        <label htmlFor="message" className="opacity-0 transition-all absolute">Message</label>
                        <textarea
                            type="text"
                            rows={5}
                            name="message"
                            placeholder="Message"
                            id="message"
                            required
                            className=":border-red-500 placeholder:uppercase placeholder:font-bold  font-bold pl-6 pb-3 w-full  border-b outline-none bg-transparent transition-all resize-none"
                        />

                        <img src={error} alt="error icon" className=' w-6 absolute right-0 top-0 hidden' />
                    </div>

                    <button className='link ml-auto'>Send Message</button>
                </form>

            </div>
            <hr />
            <div className='mt-5 '>
                <h3 className='text-2xl font-bold ' >Mahmood Hashemi</h3>
                <ul className="flex items-center justify-center mt-5 gap-4  ">
                    <li><a
                        href="https://github.com/MahmoodHashem" target='_blank'
                        className='hover:text-eucalyptus transition-all duration-300'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" width="25" height="24" role="img" aria-label="Github"><title>Github</title><path fill="currentColor" fillRule="evenodd" d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"></path></svg>
                    </a></li>
                    <li><a href="https://www.frontendmentor.io/profile/MahmoodHashem" className='hover:text-eucalyptus transition-all duration-300'
                        target='_blank'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23">
                            <title>Frontend Menotr</title>
                            <path fill="currentColor" fillRule='evenodd' d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z" /></svg>

                    </a></li>
                    <li className='' ><a href="https://www.linkedin.com/in/shah-mahmood-hashemi-55172a276/" target='_blank' className='hover:text-eucalyptus transition-all duration-300'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                            <title>Linkedin</title>
                            <path fill="currentColor" fillRule="evenodd" d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z" /></svg>

                    </a></li>
                    <li><a href="https://x.com/Mahmood18999963" target='_blank' className='hover:text-eucalyptus transition-all duration-300'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                            <title>Twitter</title>
                            <path fill='currentColor' fillRule='evenodd' d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z" /></svg>

                    </a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
