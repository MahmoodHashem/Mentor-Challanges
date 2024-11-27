/* eslint-disable react/prop-types */
const Card = ({ job, handleFilterClick }) => {
    return (
      <div className="bg-white flex flex-col md:flex-row md:items-center justify-between p-6 rounded-md shadow-md mb-4 border-l-4 border-cyan-500">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-4 md:p-0">
          <img src={job.logo} alt={job.company} className="w-20 h-20" />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-desaturatedDarkCyan font-bold">{job.company}</h3>
              {job.new && (
                <span className="bg-desaturatedDarkCyan font-semibold  text-white px-2 py-1 rounded-full text-[12px]">
                  NEW!
                </span>
              )}
              {job.featured && (
                <span className="bg-veryDarkGrayishCyan font-semibold text-white px-2 py-1 rounded-full text-[12px]">
                  FEATURED
                </span>
              )}
            </div>
  
       
            <h2 className="text-xl font-bold mb-2 text-veryDarkGrayishCyan hover:text-desaturatedDarkCyan cursor-pointer">
              {job.position}
            </h2>
  
        
            <div className="flex items-center text-gray-500 gap-4">
              <span>{job.postedAt}</span>
              <span>•</span>
              <span>{job.contract}</span>
              <span>•</span>
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t pt-4 md:border-none md:p-0">
        <span 
          onClick={() => handleFilterClick(job.role)}
          className="bg-lightGrayishCyan font-bold text-desaturatedDarkCyan px-2 py-1 rounded cursor-pointer hover:bg-desaturatedDarkCyan hover:text-white"
        >
          {job.role}
        </span>
        <span 
          onClick={() => handleFilterClick(job.level)}
          className="bg-lightGrayishCyan font-bold text-desaturatedDarkCyan px-2 py-1 rounded cursor-pointer hover:bg-desaturatedDarkCyan hover:text-white"
        >
          {job.level}
        </span>
        {job.languages.map((language, index) => (
          <span
            key={index}
            onClick={() => handleFilterClick(language)}
            className="bg-lightGrayishCyan font-bold text-desaturatedDarkCyan px-2 py-1 rounded cursor-pointer hover:bg-desaturatedDarkCyan hover:text-white"
          >
            {language}
          </span>
        ))}
        {job.tools.map((tool, index) => (
          <span
            key={index}
            onClick={() => handleFilterClick(tool)}
            className="bg-lightGrayishCyan font-bold text-desaturatedDarkCyan px-2 py-1 rounded cursor-pointer hover:bg-desaturatedDarkCyan hover:text-white"
          >
            {tool}
          </span>
        ))}
      </div>
      </div>
    );
  };
  
  export default Card;
  