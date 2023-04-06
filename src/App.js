import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
