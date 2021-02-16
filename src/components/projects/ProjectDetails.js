import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const ProjectDetails = (props) => {
  // const id = props.match.params.id
  console.log(props.project)
  const isProject = props.project
  if (isProject) {
    return (
      <div className='container section project-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>{isProject.title}</span>
            <p>{isProject.content}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>{`${isProject.authorFirstName} - ${isProject.autorId}`}</div>
            <div>{isProject.createdAt.seconds}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container center'>
        <h5>Loading project...</h5>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails)
