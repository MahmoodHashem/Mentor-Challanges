import { useState, useRef, useEffect} from "react"
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";


const Quiz = ({questions, page}) => {

    const [index, setIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmited, setIsSubmited] = useState(false)
    const [reset, setReset] = useState(false)
    const [lock, setLock] = useState(false)
    const [error, setError] = useState(false)
    const [scores, setScores] = useState(0)
    const [fadeClass, setFadeClass] = useState("fade-in")
    const navigate = useNavigate(); 
    const ansRef = useRef([])
    let [width, setWidth] = useState(window.innerWidth)
    let height= window.innerHeight

  

    const quiz = questions
    let correctAnswer = quiz[index].answer;

    const progressWidth = `${(index) * 11.09}%`


    useEffect(()=>{
 
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
        
    }, [])

    function handleRef(i) {
        setSelectedAnswer(i + 1);
        ansRef.current[i].classList.remove("dark:border-navy")
        ansRef.current[i].classList.add("border-custom-purple", "dark:border-custom-purple")

        ansRef.current[i].firstElementChild.classList.add("bg-purple-600", "text-white")

        setError(false)
        ansRef.current.map(ans => {
            if (ans !== ansRef.current[i]) {
                ans.classList.remove("border-custom-purple", "dark:border-custom-purple")
                ans.classList.add("dark:border-navy")
                ans.firstElementChild.classList.remove("bg-purple-600", "text-white")
            }
        })
    }



    function handleSubmit() {

        const correctIcon = document.createElement('img')
        const wrongIcon = document.createElement('img');
        correctIcon.src = '/icon-correct.svg'
        wrongIcon.src = '/icon-error.svg'
        correctIcon.classList.add("ml-auto")
        wrongIcon.classList.add("ml-auto")

        if (selectedAnswer) {
            if (correctAnswer == selectedAnswer) {
                ansRef.current[selectedAnswer - 1].classList.remove("border-custom-purple", "dark:border-custom-purple")
                
                ansRef.current[selectedAnswer - 1].classList.add( "border-custom-green", "dark:border-custom-green")
                ansRef.current[selectedAnswer - 1].firstElementChild.classList.remove("bg-light-grey","text-navy","bg-purple-600" )
                ansRef.current[selectedAnswer - 1].firstElementChild.classList.add("bg-custom-green", "text-white")
                ansRef.current[selectedAnswer - 1].appendChild(correctIcon)
                setScores(prev => prev + 1)
            } else {
                ansRef.current[selectedAnswer - 1].classList.add("border-custom-red", "dark:border-custom-red")
                ansRef.current[selectedAnswer - 1].firstElementChild.classList.add("bg-red-600", "text-white")

                ansRef.current[selectedAnswer - 1].appendChild(wrongIcon)
                ansRef.current[correctAnswer - 1].classList.remove("border-navy", "dark:border-navy")
                ansRef.current[correctAnswer - 1].classList.add("border-custom-green", "dark:border-custom-green")
                ansRef.current[correctAnswer - 1].firstElementChild.classList.remove("bg-light-grey","text-navy")
                ansRef.current[correctAnswer - 1].firstElementChild.classList.add("bg-custom-green", "text-white")
                ansRef.current[correctAnswer - 1].appendChild(correctIcon)
            }
            setIsSubmited(true)
            setLock(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    function handleNexQuestion() {
        setFadeClass("fade-out");

        const images = document.querySelectorAll('.option img')


        console.log(images)

        images.forEach(image => (
            image.remove()
        ))

        setTimeout(() => {
            setIndex(prev => {
                if (prev < 9) {
                    return prev + 1
                } else {
                    setReset(true)
                    return 0
                }
            })
            ansRef.current.map(ans => {
                ans.classList.remove("border-green-500", "border-red-500", "border-blue-500")
                ans.classList.add("border-2", "dark:border-navy")
                ans.firstElementChild.classList.remove("bg-purple-600", "text-white")
                ans.firstElementChild.classList.add("bg-white", "dark:bg-navy")

            })
            setFadeClass("fade-in");
        }, 500);

        
        setIsSubmited(false)
        setSelectedAnswer(null)
        setLock(false)




    }

    function handleReset() {
        setReset(false)
        setScores(0)
        navigate("/");
    }


    const optionTags = ['A', "B", "C", "D"]

    return (
        <>
        <div className="flex items-center gap-2 mb-4" >
                 <img src={`/icon-${page}.svg`} alt="" width={40} />
                 <h2 className="uppercase transition-all text-navy dark:text-light-grey" >{page}</h2>
            </div>
        <div className="flex md:flex-row flex-col md:gap-10" >
           {reset && scores > 9 &&  <Confetti
      width={width - 20}
      height={height}
    />}
            {
                reset
                    ?
                    <div className="flex-1" >
                        <h1 className="text-2xl md:text-5xl font-light text-navy transition-all dark:text-white" >Quiz completed </h1>
                        <h2 className="text-2xl md:text-5xl font-bold text-dark-navy my-3 transition-all dark:text-white" >You scored...</h2>
                    </div>
                    :
                    <div className="flex-1 relative auto-rows-max font-rubik ">
                    <p className={`text-grey-navy dark:text-light-bluish ${fadeClass}`} >{`Question ${index + 1} of 10`}</p>

                    <h2 className={`my-3 dark:text-white text-navy transition-all  text-2xl md:text-4xl font-bold ${fadeClass}`} >{quiz[index].question}</h2>
                    <div className="h-2 md:fixed md:w-1/3  bottom-20 shadow-lg  w-full bg-white transition-all dark:bg-navy rounded-full mt-3" >
                        <div className={`bg-custom-purple h-full  rounded-full`} style={{ width: progressWidth, transition: 'width 0.5s ease-in-out' }}></div>
                    </div>
                </div>

            }


            <div className={`flex flex-col  flex-1 rounded-md `}>
                {reset
                    ?
                    <div className="text-center flex flex-col items-center transition-all mb-5 bg-white p-8 rounded-md dark:bg-navy text">
                       <div className="flex justify-center items-center gap-2">
                       <img src={`/icon-${page}.svg`} alt="html icon" />
                       <h2 className="text-xl transition-all font-bold text-navy dark:text-white uppercase " >{page}</h2>
                       </div> 
                        <h3 className={`md:text-[6rem] text-5xl transition-all my-6 font-bold text-dark-navy dark:text-white ${fadeClass} `} >{scores}</h3>
                        <h4 className="text-light-bluish" > out of 10</h4>
                    </div>
                    :
                    <>
                        <ul className="my-4">
                            {
                                quiz[index].options.map((option, i) => (
                                    <li key={i} className="option">
                                        <button
                                            ref={(el) => ansRef.current[i] = el}
                                            onClick={() => lock ? null : handleRef(i)}
                                            className={`${i} dark:border-navy dark:bg-navy bg-white dark:text-white text-dark-navy p-5 border-2   shadow-lg transition-all rounded-2xl  transition-time   flex items-center gap-5 text-lg md:text-2xl      my-2 cursor-pointer text-start w-full  ${fadeClass}`}
                                        >
                                            <span
                                                className={` bg-light-grey text-navy p-3 rounded-md flex items-center justify-center min-w-12 h-12 text-lg font-bold transition-all ${fadeClass}`} >
                                                {optionTags[i]}
                                            </span>
                                            <p>{option}</p>

                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                }
                <button
                    onClick={reset ? handleReset : isSubmited ? handleNexQuestion : handleSubmit}
                    className={`bg-custom-purple  text-white font-rubik p-5 text-xl rounded-xl  `}>
                    {reset ? "Play Again" : isSubmited ? "Next Question" : "Submit Answer"}</button>
                {error ? <div className="flex items-center justify-center mt-4 gap-3" >  <img src="/icon-error.svg" alt="" /> <p className="text-red-500 text-xl font-rubik ">Please Select an Answer</p> </div>: <></>}
            </div>
        </div>
        </>
    )
}

export default Quiz
