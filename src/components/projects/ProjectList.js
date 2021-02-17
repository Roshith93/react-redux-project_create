import { ProjectSummary } from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  const projectDatas = projects.projects
  return (
    <div className='project-list section'>
      {projectDatas &&
        projectDatas.map(({ id, title, content }) => {
          return (
            <Link to={`project/${id}`} key={id}>
              <ProjectSummary title={title} content={content} />
            </Link>
          )
        })}
    </div>
  )
}

export default ProjectList
