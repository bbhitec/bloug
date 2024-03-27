import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Create from './Create'
import BlogPage from './BlogPage'
import NotFound from './NotFound'

const App = () => {
  // single definition of the backend url
  const url = "https://bloug-backend.onrender.com/blogs/"

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          {/* populate the router routes here (the header will not reload) */}
          <Switch>
            <Route exact path="/">
              <Home backendUrl={url} />
            </Route>
            <Route path="/create">
              <Create backendUrl={url} />
            </Route>
            <Route path="/blogs/:id">
              <BlogPage backendUrl={url} />
            </Route>
            <Route path="*">
              {/* this will match any previously unmatched route */}
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
