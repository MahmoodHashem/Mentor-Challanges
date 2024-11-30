

const Header = ({handleSetTheme, theme}) => {
  return (
    <header className="flex justify-between items-end mb-8">
    <h1 className="text-textSecondary text-3xl font-bold">calc</h1>
    <div className="flex items-end gap-6">
      <span className="text-textSecondary text-xs uppercase tracking-wider">theme</span>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-4 text-textSecondary text-sm">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <button
         onClick={() => {
          const currentTheme = theme
          if (currentTheme === '') handleSetTheme('theme-2');
          else if (currentTheme === 'theme-2') handleSetTheme('theme-3');
          else handleSetTheme('');
        }}
        className="bg-toggleKeypadBackground cursor-pointer p-1 rounded-full w-16">
          <div
           
            className={`w-4 h-4 rounded-full bg-keyBackgroundSecondary transition-transform duration-200 ease-in-out  ${
              theme === 'theme-2'
                ? 'translate-x-[130%]'
                : theme === 'theme-3'
                ? 'translate-x-[230%]'
                : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  </header>
  )
}

export default Header
