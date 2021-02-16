import { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import { getProjects } from './store/actions/projectActions'

const App = (props) => {
  useEffect(() => {
    props.getProjects()
  }, [])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/project/:id' component={ProjectDetails} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/createproject' component={CreateProject} />
      </Switch>
    </Router>
  )
}
const mapDispatchToProps = { getProjects }
export default connect(null, mapDispatchToProps)(App)
