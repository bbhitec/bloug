import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Create from './Create'
import BlogPage from './BlogPage'

const App = () => {

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          {/* populate the router routes here (the header will not reload) */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
