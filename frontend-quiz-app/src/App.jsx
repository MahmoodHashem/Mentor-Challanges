import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HtmlQuiz from './pages/HtmlQuiz';
import CssQuiz from './pages/CssQuiz';
import JsQuiz from './pages/JsQuiz';
import A11yQuiz from './pages/A11yQuiz';
export default function App() {


  const [theme, setTheme] = useState('light')

  function handleTheme() {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }


  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('body').className = 'light'
    } else {
      document.querySelector('body').className = 'dark'
    }
  }, [theme])
  return (
    <div className=" font-rubik p-3 lg:px-24 lg:py-16 transition-all bg-[url(/pattern-background-mobile-light.svg)] bg-fixed  dark:bg-[url(/pattern-background-mobile-dark.svg)] md:bg-[url(/pattern-background-desktop-light.svg)] md:dark:bg-[url(/pattern-background-desktop-dark.svg)] bg-[100%] bg-no-repeat bg-light-grey dark:bg-dark-navy min-h-screen">
      <nav className="">
        <div className="flex lg:pb-5  p-5 gap-2 justify-end">
        <img src={theme === 'dark' ? "/icon-sun-light.svg" : "/icon-sun-dark.svg"} alt="icon-sun" />
        <label htmlFor="toggle" className='block rounded-2xl box-content border-4 border-custom-purple  w-toggle-width h-circle-size bg-custom-purple'>
          <input onChange={handleTheme} type="checkbox" id="toggle" className="toggle-input hidden"></input>
          <div className="toggle-switch transition-all  w-circle-size h-circle-size bg-white rounded-full"></div>
        </label>
        <img src={theme === 'dark' ? "/icon-moon-light.svg" : "/icon-moon-dark.svg"} alt="" />

        </div>
        
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home theme={theme} handleTheme={handleTheme} />} />
          <Route path="/html" element={<HtmlQuiz theme={theme} />} />
          <Route path="/css" element={<CssQuiz theme={theme} />} />
          <Route path="/js" element={<JsQuiz theme={theme} />} />
          <Route path="/a11y" element={<A11yQuiz theme={theme} />} />
        </Routes>
      </Router>
    </div>
  )
}
