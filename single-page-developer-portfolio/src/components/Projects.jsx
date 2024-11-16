
import elearning from '../assets/images/thumbnail-project-2-small.webp'
import todo from '../assets/images/thumbnail-project-3-small.webp'
import dashboard from '../assets/images/social-media-dashboard.jpg'
import countdown from '../assets/images/countdown.jpg'
import crowdfunding from '../assets/images/crowdfunding.jpg'



import Project from './Project'
const Projects = () => {
  return (
    <section className='my-10 text-white' >
      <div className="flex items-center justify-between my-10">
        <h2 className='text-4xl font-bold ' >Projects</h2>
        <a href="http://" target="_blank" rel="noopener noreferrer"
        className='uppercase border-b-4 border-eucalyptus p-1 link text-lg'
        >
        Contact me
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Project title={"E-learning Landing page"} image={elearning} tools={["HTML", "CSS"]} previewLink={"https://www.frontendmentor.io/profile/MahmoodHashem"} codeLink={"https://github.com/MahmoodHashem/Mentor-Challanges"} />
        <Project title={"Social Media Dashboard"} image={dashboard} tools={["HTML", "CSS"]} previewLink={"https://www.frontendmentor.io/profile/MahmoodHashem"} codeLink={"https://github.com/MahmoodHashem/Mentor-Challanges"} />
        <Project title={"Todo Web App"} image={todo} tools={["HTML", "CSS", "JavaScript", "API"]} previewLink={"https://www.frontendmentor.io/profile/MahmoodHashem"} codeLink={"https://github.com/MahmoodHashem/Mentor-Challanges"} />
        <Project title={"Launching Countdown"} image={countdown} tools={["HTML", "CSS", "JavaScript"]} previewLink={"https://www.frontendmentor.io/profile/MahmoodHashem"} codeLink={"https://github.com/MahmoodHashem/Mentor-Challanges"} />
        <Project title={"Crowdfunding Product page"} image={crowdfunding} tools={["React", "Tailwind CSS",]} previewLink={"https://www.frontendmentor.io/profile/MahmoodHashem"} codeLink={"https://github.com/MahmoodHashem/Mentor-Challanges"} />
      </div>
    </section>
  )
}

export default Projects
