/* eslint-disable react/prop-types */
/**
 * Renders a job card component with information about a job posting.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.job - An object containing job details.
 * @param {function} props.handleFilterClick - A function to handle filter clicks.
 * @returns {JSX.Element} - The rendered job card component.
 */
const Card = ({ job, handleFilterClick }) => {

  const {logo, company, featured, position, postedAt, contract, location, languages, tools, role,level } = job
  

    return (
      <div className={`bg-white flex flex-col md:flex-row md:items-center justify-between p-6 rounded-md shadow-md mb-4 ${featured ? "border-l-4" : ""}  border-desaturatedDarkCyan`}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-4 md:p-0">
          <img src={logo} alt={company} className="w-20 h-20" />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-desaturatedDarkCyan font-bold">{company}</h3>
              {job.new && (
                <span className="bg-desaturatedDarkCyan font-semibold  text-white px-2 py-1 rounded-full text-[12px]">
                  NEW!
                </span>
              )}
              {featured && (
                <span className="bg-veryDarkGrayishCyan font-semibold text-white px-2 py-1 rounded-full text-[12px]">
                  FEATURED
                </span>
              )}
            </div>
  
       
            <h2 className="text-xl font-bold mb-2 text-veryDarkGrayishCyan hover:text-desaturatedDarkCyan cursor-pointer">
              {position}
            </h2>
  
        
            <div className="flex items-center text-gray-500 gap-4">
              <span>{postedAt}</span>
              <span>•</span>
              <span>{contract}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t pt-4 md:border-none md:p-0">
        <button
          onClick={() => handleFilterClick(role)}
          className="bg-lightGrayishCyan font-bold text-desaturatedDarkCyan px-2 py-1 rounded cursor-pointer hover:bg-desaturatedDarkCyan hover:text-white"
        >
          {role}
        </button>
        <button
          onClick={() => handleFilterClick(level)}
          className="bg-lightGrayishCyan font-bold text-desaturatedDarkCyan px-2 py-1 rounded cursor-pointer hover:bg-desaturatedDarkCyan hover:text-white"
        >
          {level}
        </button>
        {languages.map((language, index) => (
          <button
            key={index}
            onClick={() => handleFilterClick(language)}
            className="bg-lightGrayishCyan font-bold text-desaturatedDarkCyan px-2 py-1 rounded cursor-pointer hover:bg-desaturatedDarkCyan hover:text-white"
          >
            {language}
          </button>
        ))}
        {tools.map((tool, index) => (
          <button
            key={index}
            onClick={() => handleFilterClick(tool)}
            className="bg-lightGrayishCyan font-bold text-desaturatedDarkCyan px-2 py-1 rounded cursor-pointer hover:bg-desaturatedDarkCyan hover:text-white"
          >
            {tool}
          </button>
        ))}
      </div>
      </div>
    );
  };
  
  export default Card;
  