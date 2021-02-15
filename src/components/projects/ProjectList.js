import { ProjectSummary } from './ProjectSummary'
import { connect } from 'react-redux'

const ProjectList = ({ projects }) => {
  return (
    <div className='project-list section'>
      {projects &&
        projects.map(({ id, title, content }) => {
          return <ProjectSummary key={id} title={title} content={content} />
        })}
    </div>
  )
}
const mapStateToProps = ({ projectReducer: { projects } }) => {
  return {
    projects,
  }
}
export default connect(mapStateToProps)(ProjectList)
