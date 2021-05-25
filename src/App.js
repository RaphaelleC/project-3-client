import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import summerActivities from './components/activities/summerActivities'
import winterActivities from './components/activities/winterActivities'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/summerActivities" component={summerActivities}/>
        <Route path="/summerActivities" component={winterActivities}/>
        {/* <Route path="/cheeses/:id" component={CheeseShow} />
        <Route path="/cheeses" component={CheeseIndex} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App

