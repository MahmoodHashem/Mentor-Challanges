import Board from "./components/Board"
import Start from "./components/Start"

import { useState } from "react"

const App = () => {

  const [home, setHome] = useState(true)
  const [isCpuMode, setIsCpuMode] = useState(true);
  const [isTypeX, setIsTypeX] = useState(false)



  function handleToggle(type){
          setIsTypeX(type === 'x')
  }

  function goHome(){
    setHome(true)
  }

  function goToGame(){
    setHome(false)
  }


  return (
    <div className='bg-darknavy h-screen content-center'>
      {
      home ?    
      <Start goToGamePage = {goToGame}  handleCputMode = { setIsCpuMode} isTypeX={isTypeX} handleToggle = {handleToggle}  />
      :
      <Board goHomePage = {goHome} isCpuMode = {isCpuMode} isTypeX={isTypeX} handleToggle = {handleToggle} />
      }
    </div>
  )
}

export default App
