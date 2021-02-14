import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout/NavBar'
import {Dashboard} from './components/dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Dashboard}/>
      </Switch>
    </Router>
  )
}

export default App
