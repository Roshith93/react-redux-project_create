import { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createProject } from '../../store/actions/projectActions'
// = initial State
const initialState = {
  title: '',
  content: '',
}
const CreateProject = (props) => {
  const { createProject, auth } = props
  //  = setting multiple values to state
  const [{ title, content }, setState] = useState(initialState)
  //  = onChange on the state
  const onChangeValues = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  //  = clearing the state
  const clearState = () => {
    setState({ ...initialState })
  }
  //  = handle submit the state
  const handleSubmit = (e) => {
    e.preventDefault()
    createProject({ title, content })
    clearState()
  }
  if (!auth?.uid) return <Redirect to='/signin'></Redirect>
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Create Project</h5>
        <div className='input-field'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={onChangeValues}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='content'>content</label>
          <textarea
            name='content'
            id='content'
            value={content}
            onChange={onChangeValues}
            cols='30'
            rows='10'
            className='materialize-textarea'
          ></textarea>
        </div>
        <div className='input-field'>
          <button type='submit' className='btn pink lighten-1 z-depth-0'>
            Create Project
          </button>
        </div>
      </form>
    </div>
  )
}
const mapStateToProps = ({
  projectReducer: { title, content },
  firebase: { auth },
}) => {
  return {
    title,
    content,
    auth,
  }
}
const mapDispatchToProps = {
  createProject,
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
