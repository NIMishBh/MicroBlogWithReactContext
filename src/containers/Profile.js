import React from 'react';
import { UserContext, BlogContext } from '../utils/Context';
import { Link, useHistory } from 'react-router-dom';

function Profile() {
  const { user } = React.useContext(UserContext);
  const { setBlogs } = React.useContext(BlogContext);
  const history = useHistory();
  return (
    <div style={{ padding: 20 }}>
      <h3>Welcome to Your Profile</h3>
      <h4>{`Your Name : ${user}`}</h4>
      <Link to="/blogs" style={{ marginRight:10}}>Go Back</Link>
      <button onClick={() => {
        history.push('/')
        setBlogs([])
      }}>Logout</button>
    </div>
  )
}

export default Profile
