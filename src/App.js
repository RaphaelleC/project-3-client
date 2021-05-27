import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import ActivityShow from './components/activities/ActivityShow'
import summerActivitiesIndex from './components/activities/summerActivities/ActivitiesIndex'
import winterActivitiesIndex from './components/activities/winterActivities/ActivitiesIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ActivityNew from './components/activities/ActivityNew'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/create" component={ActivityNew} />
        <Route path="/activities/:activityId" component={ActivityShow} />
        <Route path="/summerActivities" component={summerActivitiesIndex} />
        <Route path="/winterActivities" component={winterActivitiesIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  )
}

export default App

