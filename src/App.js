import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import summerActivitiesIndex from './components/activities/summerActivities/ActivitiesIndex'
import winterActivitiesIndex from './components/activities/winterActivities/ActivitiesIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/summerActivities" component={summerActivitiesIndex}/>
        <Route path="/winterActivities" component={winterActivitiesIndex}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

