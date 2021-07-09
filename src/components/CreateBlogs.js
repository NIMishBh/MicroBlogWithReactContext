import React from 'react';
import {BlogContext} from '../utils/Context';

function CreateBlogs() {

  const {blogs, setBlogs} = React.useContext(BlogContext);
  const [values, setValues] = React.useState('');

  const handleChange = (e) => {
    setValues(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values) setBlogs([...blogs, values]);
    else alert('Enter Something')
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{padding: 20}}>
        <label >
          <h4>Your Thoughts:</h4>
          <input placeholder="Write Something" rows={4} name='blogContent' type="text" value={values} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" style={{margin:5}}/>
      </form>
    </>
  )
}

export default CreateBlogs
