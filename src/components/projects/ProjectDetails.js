export const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            asperiores reiciendis pariatur omnis aliquam dolorum accusantium
            atque cupiditate quisquam dolores?
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>{id}</div>
          <div>today morning</div>
        </div>
      </div>
    </div>
  )
}
