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
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} handleTheme={handleTheme} />} />
        <Route path="/html" element={<HtmlQuiz theme={theme} />} />
        <Route path="/css" element={<CssQuiz theme={theme} />} />
        <Route path="/js" element={<JsQuiz theme={theme} />} />
        <Route path="/a11y" element={<A11yQuiz theme={theme} />} />
      </Routes>
    </Router> 

  )
}
