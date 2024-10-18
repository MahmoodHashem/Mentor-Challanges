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
    "black": 80,
    "mahogany": 3
  })



  const totalBacks = {
    "bombo": 101,
    "black": 69,
    "mahogany": 100
  };

  function calculateProgress() {
    const currentTotal = (100000 - ((backs.bombo * 25) + (backs.black * 75) + (backs.mahogany * 200 )));
    const totalAmount = 100000;

    const remainingBacks = (totalAmount - currentTotal);

    // Calculate progress percentage
    console.log(remainingBacks)
    const p = totalAmount > 0 ? (remainingBacks / totalAmount) * 100 : 0;
   

  return 100 -p
  }

  const progress = calculateProgress();

  function handleBacks(type) {
    setBacks(prev => {
      const newCount = Math.max(0, prev[type] - 1);
      return {
        ...prev,
        [type]: newCount
      };
    });

  }




  function openModal(value = "no-pledge") {
    setModal(true)
    setSelectedPledge(value)
  }

  function closeModal() {
    setModal(false)
  }




  return (
    <div className='h-screen'>
      <Header />
      <Intro openModal={openModal} selected={selectedPledge} />
      <Back backs={backs} progress={progress} />
      <About openModal={openModal} backs={backs} />
      <BackModal backs={backs} handleBacks={handleBacks} selected={selectedPledge} openModal={modal} closeModal={closeModal} />
    </div>

  )

}

export default App
