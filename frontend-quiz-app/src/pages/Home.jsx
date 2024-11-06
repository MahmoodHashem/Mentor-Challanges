import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div className='md:flex'>
            <header className='p-5 flex-1' >
                <h1 className="text-dark-navy dark:text-light-grey transition-all text-4xl sm:text-5xl lg:text-[4rem] my-5 ">Welcom to the <br />  <b>Frontend Quiz!</b></h1>
                <p className='text-dark-navy dark:text-gray-300 transition-all italic'  >Pick a subject to get started.</p>
            </header>
            <ul className='m-5 md:mb-1 flex-1'>
                <li className='bg-white dark:bg-navy transition-all  rounded-xlg font-bold text-lg text-dark-navy dark:text-light-grey shadow px-5 py-4 my-3 rounded-lg' ><Link to="/html" className='flex items-center gap-3'><img src="/icon-html.svg" className='bg-yellow-200 rounded-lg p-1' alt="html icon" /> HTML</Link></li>
                <li className='bg-white dark:bg-navy transition-all  rounded-xlg font-bold text-lg text-dark-navy dark:text-light-grey shadow px-5 py-4 my-3 rounded-lg' ><Link to="/css" className='flex items-center gap-3'> <img src="/icon-css.svg" alt="css icon" className='bg-green-100 p-1 rounded-lg' /> CSS </Link></li>
                <li className='bg-white dark:bg-navy transition-all  rounded-xlg font-bold text-lg text-dark-navy dark:text-light-grey shadow px-5 py-4 my-3 rounded-lg' ><Link to="/js" className='flex items-center gap-3' ><img src="/icon-js.svg" alt="js icon" className='bg-blue-50 p-1 rounded-lg' /> JavaScript</Link></li>
                <li className='bg-white dark:bg-navy transition-all  rounded-xlg font-bold text-lg text-dark-navy dark:text-light-grey shadow px-5 py-4 my-3 rounded-lg' ><Link to="/a11y" className='flex items-center gap-3' > <img src="/icon-accessibility.svg" alt="a11y icon" className='bg-purple-100 p-1 rounded-lg' /> Accessibility </Link></li>
            </ul>
        </div>
    )
}
