import { ProjectSummary } from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  const projectDatas = projects
  return (
    <div className='project-list section'>
      {projectDatas &&
        projectDatas.map((project) => {
          return (
            <Link to={`project/${project.id}`} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          )
        })}
    </div>
  )
}

export default ProjectList
