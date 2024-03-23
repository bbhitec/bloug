import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Create from './Create'
import BlogPage from './BlogPage'
import NotFound from './NotFound'

const App = () => {
  // this is the single definition of the backend url (remote url can be used)
  const url = "http://localhost:3000/blogs/"
  // const url = "https://my-json-server.typicode.com/bbhitec/bloug-json-server/blogs/"

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
