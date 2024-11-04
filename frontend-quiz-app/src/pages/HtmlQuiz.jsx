import { useState, useRef } from "react"
import getQuiz from "../questions"

const HtmlQuiz = () => {

    const [index, setIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmited, setIsSubmited] = useState(false)
    const [reset, setReset] = useState(false)
    const [lock, setLock] = useState(false)
    const [error, setError] = useState(false)
    const [scores, setScores] = useState(0)
    const ansRef = useRef([])


    const quiz = getQuiz
    let correctAnswer = quiz[index].answer;

    const progress = {
        1:"w-[10%]",
        2:"w-[20%]",
        3:"w-[30%]",
        4:"w-[40%]",
        5:"w-[50%]",
        6:"w-[60%]",
        7:"w-[70%]",
        8:"w-[80%]",
        9:"w-[90%]",
        10:"w-[100%]",
    }

    function handleRef(i) {
        setSelectedAnswer(i + 1);
        ansRef.current[i].classList.add("border-blue-500")
        setError(false)
        ansRef.current.map(ans => {
            if (ans !== ansRef.current[i]) {
                ans.classList.remove("border-blue-500")
            }
        })
    }



    function handleSubmit() {

        if (selectedAnswer) {

            if (correctAnswer == selectedAnswer) {
                ansRef.current[selectedAnswer - 1].classList.add("bg-green-100", "border-green-500")
                setScores(prev => prev + 1)
            } else {
                ansRef.current[selectedAnswer - 1].classList.add("bg-red", "border-red")
                ansRef.current[correctAnswer - 1].classList.add("bg-green-100", "border-green-500")
            }
            setIsSubmited(true)
            setLock(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    function handleNexQuestion() {
        setIndex(prev => {
            if (prev < 9) {
                return prev + 1
            } else {
                setReset(true)
                return 0
            }
        })

        
        setIsSubmited(false)
        setSelectedAnswer(null)
        setLock(false)

        ansRef.current.map(ans => (
            ans.classList.remove("bg-green-100", "border-green-500", "bg-red-100", "border-red-500", "border-blue-500")
        ))
    }

    function handleReset() {
        setReset(false)
        setScores(0)
    }





    return (
        <div >
            <div className={`flex flex-col  bg-white p-4  max-w-96 sm:max-w-[450px] m-auto rounded-md ${error ? "border border-red-500" : ""} `}>
                <h1 className="text-2xl font-bold my-4" >HTML Quiz App</h1>
                <hr />
                {reset
                    ?
                    <div className="text-center mb-5">
                        <h2 className="text-2xl font-bold mb-5">
                            Your Scores
                        </h2>
                        <h3 className="text-5xl font-bold" >{scores}</h3>
                        <h4> out of 10</h4>
                    </div>
                    :
                    <>
                        <p>{`${index + 1}/10`}</p>
                        <div className="h-2 w-full bg-gray-400 rounded-full mt-3">
                            <div className={`bg-green-500 h-full ${progress[index+1]} rounded-full`}></div>
                        </div>
                        <h2 className="mt-3  text-xl font-bold" >{quiz[index].question}</h2>
                        <ul className="my-4">
                            {
                                quiz[index].options.map((option, i) => (
                                    <li key={i}>
                                        <button
                                            ref={(el) => ansRef.current[i] = el}
                                            onClick={() => lock ? null : handleRef(i)}
                                            className={`border ${i} px-4 py-2 rounded-md my-2 cursor-pointer text-start w-full`}
                                        >
                                            {option}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                }
                <button onClick={reset ? handleReset : isSubmited ? handleNexQuestion : handleSubmit} className="bg-slate-500 text-white py-2 px-4 rounded-md mx-auto ">{reset ? "Reset" : isSubmited ? "Next Question" : "Submit Answer"}</button>
                {error ? <p className="text-red-500 font-bold m-auto mt-4 ">Select one of the options</p> : <></>}
            </div>
        </div>
    )
}

export default HtmlQuiz
