
import Card from './Card'

import jobs from '../assets/data'


import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {

  const [filters, setFilters] = useState([])

  const handleFilterClick = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter])
    }
  }

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter(filter => filter !== filterToRemove))
  }

  const clearFilters = () => {
    setFilters([])
  }

  const filteredJobs = jobs.filter(job => {
    if (filters.length === 0) return true

    const jobTags = [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools
    ]

    return filters.every(filter => jobTags.includes(filter))
  })

  return (

    <div className="bg-lightGrayishCyan min-h-screen w-full overflow-hidden">

      <header className='h-40 bg-desaturatedDarkCyan bg-[url(/images/bg-header-mobile.svg)] md:bg-[url(/images/bg-header-desktop.svg)] bg-no-repeat bg-cover mb-20' >

      </header>

      <AnimatePresence>
        {filters.length > 0 && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white mx-4 md:mx-20 p-4 rounded-md shadow-md -mt-8 mb-8 flex justify-between items-center"
          >
            <div className="flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center bg-lightGrayishCyan rounded"
                >
                  <span className="px-2 py-1 text-desaturatedDarkCyan font-bold">{filter}</span>
                  <button
                    onClick={() => removeFilter(filter)}
                    className="bg-desaturatedDarkCyan hover:bg-veryDarkGrayishCyan text-white px-2 py-1 rounded-r"
                  >
                    ✕
                  </button>
                </motion.span>
              ))}
            </div>
            <button
              onClick={clearFilters}
              className="text-desaturatedDarkCyan hover:underline font-bold"
            >
              Clear
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='px-4 md:px-20' >
      <AnimatePresence>
        {filteredJobs.map(job => (
          <motion.div
            key={job.id}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1000, opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <Card job={job} handleFilterClick={handleFilterClick} />
          </motion.div>
        ))
        }
  </AnimatePresence>

      </div>

    </div>

  )
}

export default App
