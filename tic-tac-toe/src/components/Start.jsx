
import logo from '../assets/images/logo.svg'
import nonSelectO from '../assets/images/icon-o.svg'
import selectedO from '../assets/images/icon-o-default.svg'
import nonSelectX from '../assets/images/icon-x.svg'
import selectedX from '../assets/images/icon-x-default.svg'


const Start = ({goToGamePage, handleCputMode, isTypeX, handleToggle}) => {

 

    function goHomeInCpuMode(){
        goToGamePage()
        handleCputMode(true)
    }

    function goHomeInPlayerMode(){
        goToGamePage()
        handleCputMode(false)
    }


    console.log(`Your type is ${isTypeX ? "X" : "O"}`)


    return (
        <div className="flex flex-col gap-5 max-w-96 uppercase font-Outfit  text-silver text-center m-auto">
            <div className="w-16 self-center">
                <img src={logo} alt="logo" />
            </div>
            <div className="bg-semidarknavy rounded-lg p-5 shadow-custom-shadow space-y-4 ">
                <h1 className=' font-bold' >Pick Player 1&apos;s mark</h1>
                <div className="bg-darknavy flex h-14 p-2  rounded-lg ">
                    <button
                    onClick={()=> handleToggle('x')}
                    className={`flex-1 flex items-center justify-center ${isTypeX ? "bg-silverhover" : ""} p-2 rounded-lg`}>
                        <img src={isTypeX ? selectedX : nonSelectX} alt="x" className='w-6' />
                    </button>
                    <button
                    onClick={()=> handleToggle('o')}
                    className={`flex-1 flex items-center justify-center p-2 rounded-lg ${isTypeX ? "" : "bg-silverhover"}`}>
                        <img src={isTypeX ? nonSelectO : selectedO} alt="o" className='w-6'  />
                    </button>
                </div>
                <p className='text-sm text-gray-400' >Remeber: X goes first</p>
            </div>
            <button onClick={goHomeInCpuMode} className="bg-lightyellow hover:bg-lightyellowhover text-darknavy p-3 rounded-xl mt-5 font-Outfit font-bold uppercase shadow-inner-yellow">New Game (Vs CPU)</button>
            <button onClick={goHomeInPlayerMode} className='bg-lightblue hover:bg-lightbluehover text-darknavy p-3 rounded-xl font-Outfit font-bold uppercase shadow-inner-blue' >New Game (Vs Player)</button>
        </div>
    )
}

export default Start
