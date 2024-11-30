import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const FilterBar = ({activeFilters, onFilterRemove, onClearFilters}) => {
  return (
    <AnimatePresence>
    {activeFilters.length > 0 && (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white mx-4 md:mx-20 p-4 rounded-md shadow-md -mt-8 mb-8 flex justify-between items-center"
      >
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter, index) => (
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
                onClick={() => onFilterRemove(filter)}
                className="bg-desaturatedDarkCyan hover:bg-veryDarkGrayishCyan text-white px-2 py-1 rounded-r"
              >
                ✕
              </button>
            </motion.span>
          ))}
        </div>
        <button
          onClick={onClearFilters}
          className="text-desaturatedDarkCyan hover:underline font-bold"
        >
          Clear
        </button>
      </motion.div>
    )}
  </AnimatePresence>
  )
}

export default FilterBar
