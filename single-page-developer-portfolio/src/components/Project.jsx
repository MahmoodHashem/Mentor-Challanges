import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { document } from 'postcss';

import {useEffect, useState} from 'react'

const Project = ({title, image,  tools, previewLink, codeLink }) => {

  useEffect(() => {
      AOS.init();
  }, [])



  
  return (
    <div  data-aos="fade-up" className='text-white'>
      <img src={image} alt="" />
      <h3 className="text-2xl my-3 font-bold uppercase ">{title}</h3>
      <ul className='flex gap-3 my-2'>
       {tools.map((tool, index) => (
          <li key={index} className='text-lg font-bold' >{tool}</li>
       ))}
      </ul>
      <ul className='flex gap-3 my-2'>
        <li>
          <a href="http://"
           target="_blank" 
           rel="noopener noreferrer"
           className="border-b-2 border-eucalyptus link text-lg font-bold uppercase "
           >
            View Project
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer"
           className="border-b-2 border-eucalyptus link text-lg font-bold uppercase "
          >
            View Code
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Project
