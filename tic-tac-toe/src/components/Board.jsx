import { useState, useEffect } from 'react';
import ReactVivus from 'react-vivus';
import oThumbnail from '../assets/images/icon-o-outline.svg';
import xThumbnail from '../assets/images/icon-x-outline.svg';
import o from '../assets/images/icon-actual-o.svg';
import x from '../assets/images/icon-actual-x.svg';
import oWins from '../assets/images/icon-o-default.svg'
import xWins from '../assets/images/icon-x-default.svg'
import logo from '../assets/images/logo.svg'
import xTurnIcon from '../assets/images/icon-x.svg'
import oTurnIcon from '../assets/images/icon-o.svg'
import restartIcon from '../assets/images/icon-restart.svg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Board = ({ goHomePage, isCpuMode, isTypeX }) => {

  const MySwal = withReactContent(Swal)




  const [boxContent, setBoxContent] = useState(Array(9).fill(null));
  const [isHovered, setIsHovered] = useState(Array(9).fill(false));
  const [status, setStatus] = useState(null)
  const [isXTurn, setIsXTurn] = useState(true)

  const [gameStats, setGameStats] = useState({ xScores: 0, oScores: 0, ties: 0 });

  const [winningPattern, setWinningPattern] = useState([])

  useEffect(() => {
    console.log(isTypeX)
    if (!winner(boxContent) && boxContent.every(el => el !== null)) {
      setStatus("It's a Tie")
      showTied()

    } else if (winner(boxContent)) {
      setStatus(`Winner is ${winner(boxContent).winner}`)
      const currentWinner = winner(boxContent).winner;

      setWinningPattern(winner(boxContent).pattern)

      showModal(currentWinner === 'X' ? 1 : 2)

      console.log(isTypeX)

    } else if (!isXTurn && isCpuMode) {
      // If it's the CPU's turn and the game is in CPU mode, make a CPU move
      makeCpuMove();
    }

  }, [boxContent, isXTurn])


  const makeCpuMove = () => {
    const emptyIndices = boxContent.map((value, index) => value === null ? index : null).filter(index => index !== null);
  
    const cpuType = isTypeX ? 'O' : 'X'
    const playerType = isTypeX ? 'X' : 'O'

    // Check if CPU can win in the next move
    for (let i = 0; i < emptyIndices.length; i++) {
      const index = emptyIndices[i];
      const newContent = [...boxContent];
      newContent[index] = cpuType; // Assume CPU is 'O'
      if (winner(newContent)?.winner === cpuType) {
        handleBoxClick(index);
        return;
      }
    }
  
    // Check if player can win in the next move and block it
    for (let i = 0; i < emptyIndices.length; i++) {
      const index = emptyIndices[i];
      const newContent = [...boxContent];
      newContent[index] = playerType; // Assume player is 'X'
      if (winner(newContent)?.winner === playerType) {
        handleMouseEnter(index)
        handleBoxClick(index);
        return;
      }
    }
  
    // Otherwise, choose a random move
    if (emptyIndices.length > 0) {
      const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      handleBoxClick(randomIndex);
    }
  };


  const showModal = (winner) => {
    MySwal.fire({
      background: '#1f3641',
      title: `<h2 class='text-sm text-silver font-Outfit font-semibold uppercase '>Player ${winner} Wins</h2>`,
      html: <div className={`${winner === 1 ? "text-lightblue" : "text-lightyellow"} h-10 uppercase font-Outfit font-bold  text-2xl flex items-center justify-center gap-5`} > <img src={winner === 1 ? x : o} alt='o' className='w-10' /> Takes the Round </div>,
      showDenyButton: true,
      width: '100%',
      confirmButtonText: "<p class='font-Outfit font-semibold text-darknavy' >QUIT</p>",
      confirmButtonColor: '#dbe8ed',
      denyButtonColor: '#f2b137',
      denyButtonText: `<p class="font-Outfit font-semibold text-darknavy" >NEXT ROUND</p>`,
    }).then((result) => {
      // Remeber this logic is reverese in buttons (quit is confirmed and nex round is deny)
      if (result.isConfirmed || result.isDismissed) {
        reset()
        setGameStats({ xScores: 0, oScores: 0, ties: 0 });
        goHomePage()
      } else if (result.isDenied) {
   
          setGameStats(prevStats => ({
            ...prevStats,
            xScores: winner === 1 ? prevStats.xScores + 1 : prevStats.xScores,
            oScores: winner === 2 ? prevStats.oScores + 1 : prevStats.oScores,
          }));
          reset()

      }
    });
  }

  const showTied = () => {
    MySwal.fire({
      background: '#1f3641',
      html: <div className={`text-silver h-10 uppercase font-Outfit font-bold  text-2xl flex items-center justify-center gap-5 `} > Round Tied </div>,
      showDenyButton: true,
      width: '100%',
      confirmButtonText: "<p class='font-Outfit font-semibold text-darknavy' >QUIT</p>",
      confirmButtonColor: '#dbe8ed',
      denyButtonColor: '#f2b137',
      denyButtonText: `<p class="font-Outfit font-semibold text-darknavy" >NEXT ROUND</p>`,
    }).then((result) => {
      // Remeber this logic is reverese in buttons (quit is confirmed and nex round is deny)
      if (result.isConfirmed || result.isDismissed) {
        reset()
        setGameStats({ xScores: 0, oScores: 0, ties: 0 });
        goHomePage()
      } else if (result.isDenied) {
        setGameStats(prevStats => ({
          ...prevStats,
          ties: prevStats.ties + 1,
        }));
        reset()
      }
    });
  }

  const restartGame = () => {
    MySwal.fire({
      background: '#1f3641',
      html: <div className={`text-silver h-10 uppercase font-Outfit font-bold  text-2xl flex items-center justify-center gap-5 `} > Restart Game?  </div>,
      showDenyButton: true,
      width: '100%',
      confirmButtonText: "<p class='font-Outfit uppercase font-semibold text-darknavy' >No, Cancel</p>",
      confirmButtonColor: '#dbe8ed',
      denyButtonColor: '#f2b137',
      denyButtonText: `<p class="font-Outfit uppercase font-semibold text-darknavy" >Yes, Restart</p>`,
    }).then((result) => {
      // Remeber this logic is reverese in buttons (cancel is confirmed and okay is deny)
      if (!result.isConfirmed) {
        reset()
      }
    });
  }

  const handleBoxClick = (index) => {
    if (status || boxContent[index]) return

    setBoxContent((prevContent) => {
      if (prevContent[index] === null) {
        const newContent = [...prevContent];
        newContent[index] = isXTurn ? 'X' : 'O'; // Assign 'O' or 'X' based on box index
        setIsXTurn(!isXTurn)
        return newContent;
      }
      return prevContent; // Prevent changes if already set
    });
  };



  const handleMouseEnter = (index) => {
    if (status) return

    setIsHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = true;
      return newHovered;
    });
  };

  const handleMouseLeave = (index) => {

    if (status) return

    setIsHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = false;
      return newHovered;
    });
  };

  function winner(squares) {
    const winnerPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ]

    for (let i = 0; i < winnerPattern.length; i++) {
      const [x, y, z] = winnerPattern[i]

      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {

        return { winner: squares[x], pattern: winnerPattern[i] }
      }
    }

    return null
  }

  function reset() {
    setBoxContent(Array(9).fill(null))
    setIsXTurn(true)
    setStatus(null)
    setIsHovered(Array(9).fill(false))
    setWinningPattern([])

  }

  return (
    <div className='grid grid-cols-3 gap-5 max-w-96 m-auto'>
      <div className="w-14 self-center">
        <img src={logo} alt="" />
      </div>
      <div className='h-10 w-28 flex items-center justify-center gap-2 bg-semidarknavy shadow-custom-sm rounded-lg'>
        <img src={isXTurn ? xTurnIcon : oTurnIcon} alt="x icon" className='w-4' />
        <h2 className='text-lg text-silver font-Outfit font-semibold' >Turn</h2>
      </div>
      <button className='bg-silver justify-self-end flex items-center justify-center self-center rounded-lg w-10 h-10' onClick={restartGame} > <img src={restartIcon} alt="restart icon" className='w-5' />  </button>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <button
          className={`${winningPattern.includes(index) ? boxContent[index] === "X" ? "bg-lightblue" : "bg-lightyellow" : "bg-semidarknavy"} relative rounded-xl w-28 h-28 shadow-custom-shadow`}
          key={index}
          onClick={() => handleBoxClick(index)}
          // onFocus={() => handleMouseEnter(index)}
          // onBlur={() => handleMouseLeave(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}

        >

          {boxContent[index] === null && isHovered[index] && !status && (
            <ReactVivus

              id={`thumbnail-${index}`}
              option={{
                file: isXTurn ? xThumbnail : oThumbnail,
                animTimingFunction: 'EASE',
                type: 'sync',
                duration: 30,
              }}
              style={{
                maxHeight: '150px', maxWidth: '150px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',


              }}

            />
          )}
          {boxContent[index] === 'O' && (
            <img
              src={winningPattern.includes(index) ? oWins : o}
              alt="O"
              style={{ maxHeight: '150px', maxWidth: '150px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          )}
          {boxContent[index] === 'X' && (
            <img
              src={winningPattern.includes(index) ? xWins : x}
              alt="X"
              style={{ maxHeight: '150px', maxWidth: '150px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          )}
        </button>
      ))}
      <div className='flex flex-col items-center justify-center bg-lightblue text-darknavy font-Outfit font-bold rounded-lg text-lg uppercase text-center'>
        <h2 className='text-sm font-semibold' >X (p1)</h2>
        <h3>
          {gameStats.xScores}
        </h3>
      </div>
      <div className='flex flex-col items-center justify-center bg-silver text-darknavy font-Outfit font-bold rounded-lg text-lg uppercase text-center'>
        <h2 className='text-sm font-semibold' >Ties</h2>
        <h3>
          {gameStats.ties}
        </h3>
      </div>
      <div className='flex flex-col items-center justify-center bg-lightyellow text-darknavy font-Outfit font-bold rounded-lg text-lg uppercase text-center'>
        <h2 className='text-sm font-semibold' >O(CPU)</h2>
        <h3>
          {gameStats.oScores}
        </h3>
      </div>
    </div>
  );
};

export default Board;