import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/cheeses/:id" component={CheeseShow} />
        <Route path="/cheeses" component={CheeseIndex} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
