import './App.css';
import { UserContext, BlogContext } from './utils/Context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './containers/Signin';
import Blogs from './containers/Blogs';
import React, { Suspense } from 'react';

const Profile = React.lazy(() => import('./containers/Profile'));

function App() {

  const [user, setUser] = React.useState(null);
  const [blogs, setBlogs] = React.useState([]);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <BlogContext.Provider value={{blogs,setBlogs}}>
          <Switch>
            <Route exact path='/' component={Signin} />
            <Route path='/blogs' component={Blogs} />
            <Suspense fallback ={<div>Loading...</div>}>
              <Route path='/profile' component={Profile}/>
            </Suspense>
          </Switch>
        </BlogContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
