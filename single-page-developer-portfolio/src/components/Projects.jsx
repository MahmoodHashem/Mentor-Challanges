
import Project from './Project'

import elearning from '../assets/images/thumbnail-project-2-small.webp'
import todo from '../assets/images/thumbnail-project-3-small.webp'
import dashboard from '../assets/images/social-media-dashboard.jpg'
import countdown from '../assets/images/countdown.jpg'
import crowdfunding from '../assets/images/crowdfunding.jpg'
import frontendquiz from '../assets/images/frontendquiz.jpg'
import githubfinder from '../assets/images/githubfinder.webp'
import productList from '../assets/images/productlist.webp'
import tip from '../assets/images/tip.jpg'
import mortgage from '../assets/images/mortgage.jpg'

import projects from '../assets/myProjects'



const Projects = () => {

const images = [frontendquiz, githubfinder, productList, todo, countdown,elearning, dashboard, crowdfunding, mortgage, tip]


  return (
    <section className='my-10 text-white' >
      <div className="flex items-center justify-between my-10">
        <h2 className='text-4xl font-bold ' >Projects</h2>
        <a href="#footer" 
        className='uppercase border-b-4 border-eucalyptus p-1 link text-lg'
        >
        Contact me
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-10">
       {projects.map((project, index) =>(
        <Project key={index} title={project.title} tools={project.tools} image={images[index]} previewLink={project.previewLink} codeLink={project.codeLink} />
       ))}
      </div>
    </section>
  )
}

export default Projects
