import moment from 'moment'

export const ProjectSummary = (props) => {
  const { title, createdAt, authorFirstName, authorLastName } = props.project
  return (
    <div className='card z-depth-0 project-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{title}</span>
        <p>{(authorFirstName, authorLastName)}</p>
        <p className='grey-text'>{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}
