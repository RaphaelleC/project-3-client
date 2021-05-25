import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import summerActivitiesIndex from './components/activities/summerActivities/ActivitiesIndex'
import winterActivitiesIndex from './components/activities/winterActivities/ActivitiesIndex'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/summerActivities" component={summerActivitiesIndex}/>
        <Route path="/winterActivities" component={winterActivitiesIndex}/>
        {/* <Route path="/cheeses/:id" component={CheeseShow} />
        <Route path="/cheeses" component={CheeseIndex} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App

