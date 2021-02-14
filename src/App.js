import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout/NavBar'
import { Dashboard } from './components/dashboard/Dashboard'
import { ProjectDetails } from './components/projects/ProjectDetails'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/project/:id' component={ProjectDetails} />
      </Switch>
    </Router>
  )
}

export default App
