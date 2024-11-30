
import Card from './Card'
import jobs from '../assets/data'


import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import FilterBar from './FilterBar'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState([])

  useEffect(() => {
    const urlFilters = searchParams.get('filters')
    console.log(urlFilters)
    if (urlFilters) {
      setFilters(urlFilters.split(','))
    }
  }, [])

  useEffect(() => {
    if (filters.length > 0) {
      setSearchParams({ filters: filters.join(',') })
    } else {
      setSearchParams({})
    }
  }, [filters])

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

    <div className="transition-all duration-300 bg-lightGrayishCyan min-h-screen w-full overflow-hidden">

      <header className='h-40 bg-desaturatedDarkCyan bg-[url(/images/bg-header-mobile.svg)] md:bg-[url(/images/bg-header-desktop.svg)] bg-no-repeat bg-cover mb-20' >

      </header>

     <FilterBar activeFilters={filters} onFilterRemove={removeFilter} onClearFilters={clearFilters} />

      <div className='px-4 md:px-20 ' >
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
