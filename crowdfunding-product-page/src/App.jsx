/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Back from './components/Back'
import About from './components/about/About'
import BackModal from './components/modal/BackModal'


function App() {

  const [modal, setModal] = useState(false);
  const [selectedPledge, setSelectedPledge] = useState('no-pledge'); 

  const [backs, setBacks] = useState({
    "bombo": 101,
    "black":64,
    "mahogany":4
  })

  function handleBacks(type) {
    setBacks(prev => {
      const newCount = Math.max(0, prev[type] - 1);
      return {
        ...prev,
        [type]: newCount
      };
    });
  }

  console.log(backs)

  function openModal(value="no-pledge"){
      setModal(true)
      setSelectedPledge(value)
  }

  function closeModal(){
      setModal(false)
  }




  return (
    <div className='h-screen'>
      <Header />
      <Intro openModal={openModal} selected={selectedPledge}  />
      <Back backs={backs} />
      <About openModal={openModal}/>
      <BackModal selected={selectedPledge} openModal={modal} closeModal={closeModal} />
    </div>

  )

}

export default App
