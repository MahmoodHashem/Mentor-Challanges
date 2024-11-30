
const Keypad = ({handleNumber, handleOperator, handleDelete, handleReset, handleEquals}) => {

    const calculatorKeys = [
        { value: '7', type: 'number', onClick: () => handleNumber('7') },
        { value: '8', type: 'number', onClick: () => handleNumber('8') },
        { value: '9', type: 'number', onClick: () => handleNumber('9') },
        { value: 'DEL', type: 'function', onClick: handleDelete },
        { value: '4', type: 'number', onClick: () => handleNumber('4') },
        { value: '5', type: 'number', onClick: () => handleNumber('5') },
        { value: '6', type: 'number', onClick: () => handleNumber('6') },
        { value: '+', type: 'operator', onClick: () => handleOperator('+') },
        { value: '1', type: 'number', onClick: () => handleNumber('1') },
        { value: '2', type: 'number', onClick: () => handleNumber('2') },
        { value: '3', type: 'number', onClick: () => handleNumber('3') },
        { value: '-', type: 'operator', onClick: () => handleOperator('-') },
        { value: '.', type: 'number', onClick: () => handleNumber('.') },
        { value: '0', type: 'number', onClick: () => handleNumber('0') },
        { value: '/', type: 'operator', onClick: () => handleOperator('/') },
        { value: 'x', type: 'operator', onClick: () => handleOperator('x') },
        { value: 'RESET', type: 'function', span: 2, onClick: handleReset },
        { value: '=', type: 'equals', span: 2, onClick: handleEquals }
      ];
    
      const getButtonStyles = (type) => {
        const baseStyles = "font-spartan p-4 rounded font-bold";
        const styles = {
          number: `bg-keyBackgroundTertiary hover:bg-keyHoverTertiary shadow-[0_4px_0] shadow-keyShadowTertiary  ${baseStyles} text-textPrimary text-3xl`,
          operator: `bg-keyBackgroundTertiary hover:bg-keyHoverTertiary shadow-[0_4px_0] shadow-keyShadowTertiary ${baseStyles} text-textPrimary text-3xl`,
          function: `bg-keyBackgroundPrimary hover:bg-keyHoverPrimary shadow-[0_4px_0] shadow-keyShadowPrimary ${baseStyles} text-textSecondary text-xl`,
          equals: `bg-keyBackgroundSecondary hover:bg-keyHoverSecondary shadow-[0_4px_0] shadow-keyShadowSecondary ${baseStyles} text-textSecondary text-xl col-span-2`,
        };
        return styles[type];
      };
    

  return (
    <div className="bg-toggleKeypadBackground p-6 rounded-lg grid grid-cols-4 gap-3 sm:gap-4">
          {calculatorKeys.map((key, index) => (
            <button
              key={index}
              onClick={key.onClick}
              className={`${getButtonStyles(key.type)} ${key.span ? `col-span-${key.span}` : ''}`}
            >
              {key.value}
            </button>
          ))}
        </div>
  )
}

export default Keypad
