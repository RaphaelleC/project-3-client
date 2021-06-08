import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import ActivityShow from './components/activities/ActivityShow'
import summerActivitiesIndex from './components/activities/summerActivities/ActivitiesIndex'
import winterActivitiesIndex from './components/activities/winterActivities/ActivitiesIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ActivityNew from './components/activities/ActivityNew'
import ActivityEdit from './components/activities/ActivityEdit'
import ActivitySearch from './components/activities/ActivitySearch'
import SecureRoute from './components/common/SecureRoute'
import Mapbox from './components/activities/Map'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <SecureRoute path="/create" component={ActivityNew} />
        <SecureRoute path="/activities/:activityId/edit" component={ActivityEdit} />
        <Route path="/activities/:activityId" component={ActivityShow} />
        <Route path="/search" component={ActivitySearch} />
        <Route path="/summerActivities" component={summerActivitiesIndex} />
        <Route path="/winterActivities" component={winterActivitiesIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login}/>
        <Route path="/map" component={Mapbox} />
      </Switch>
    </Router>
  )
}

export default App

