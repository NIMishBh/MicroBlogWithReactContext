import React from 'react';
import CreateBlogs from '../components/CreateBlogs';
import BlogList from '../components/BlogList';
import { Link } from 'react-router-dom';

function Blogs() {
  return (
    <>
      <Link to="/profile" style={{margin:8}}>Profile</Link>
      <CreateBlogs />
      <BlogList />
    </>
  )
}

export default Blogs
