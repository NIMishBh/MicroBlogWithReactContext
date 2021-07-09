import React from 'react'
import { BlogContext } from '../utils/Context'

function BlogList() {
  const { blogs } = React.useContext(BlogContext);
  return (
    <>
      <ul style={{listStyleType: 'none'}}>
        {
          blogs?.map((blog,i) =>{
            return (
              <li key={i} style={{width:400 , border: '1px solid #DCDCDC', margin:8, padding: 5}}>{blog}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default BlogList
