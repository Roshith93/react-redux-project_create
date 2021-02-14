import { useState } from 'react'
// = initial State
const initialState = {
  title: '',
  content: '',
}
export const CreateProject = () => {
  //  = setting multiple values to state
  const [{ title, content }, setState] = useState(initialState)
  //  = onChange on the state
  const onChangeValues = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  //  = clearing the state
  const clearState = () => {
    console.log('calling')
    setState({ ...initialState })
  }
  //  = handle submit the state
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, content)
    clearState()
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
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
