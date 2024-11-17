import Board from "./components/Board"
import Start from "./components/Start"

import { useState } from "react"

const App = () => {

  const [home, setHome] = useState(true)

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
      <Start goToGamePage = {goToGame} />
      :
      <Board goHomePage = {goHome} />
      }
    </div>
  )
}

export default App
