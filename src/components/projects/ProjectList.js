import { ProjectSummary } from './ProjectSummary'

const ProjectList = ({ projects }) => {
  const projectDatas = projects.projects
  return (
    <div className='project-list section'>
      {projectDatas &&
        projectDatas.map(({ id, title, content }) => {
          return <ProjectSummary key={id} title={title} content={content} />
        })}
    </div>
  )
}

export default ProjectList
