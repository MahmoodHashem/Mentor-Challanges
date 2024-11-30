import { useEffect, useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import Header from "./components/Header";

function App() {

  const [theme, setTheme] = useState('');


  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);


  const handleSetTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  const calculate = (first, second, operator) => {
    switch (operator) {
      case '+': return first + second;
      case '-': return first - second;
      case 'x': return first * second;
      case '/': return first / second;
      default: return second;
    }
  };

  const handleNumber = (value) => {
    if (waitingForSecondOperand) {
      setDisplay(value);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);
    if (operator && firstOperand !== null) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  const handleReset = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleDelete = () => {
    setDisplay(display.length === 1 ? '0' : display.slice(0, -1));
  };



  return (
    <div className="font-spartan bg-mainBackground min-h-screen flex items-center justify-center">
      <div className="w-[540px] p-2 sm:p-8">
        <Header handleSetTheme={handleSetTheme} theme={theme} />
        <Display display={display} />
        <Keypad handleDelete={handleDelete} handleNumber={handleNumber} handleEquals={handleEquals} handleOperator={handleOperator} handleReset={handleReset} />
      </div>
    </div>
  );
}

export default App;
