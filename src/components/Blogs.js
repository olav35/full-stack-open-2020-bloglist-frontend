import React from 'react'
import Blog from './Blog'

const Blogs = ({blogs, name}) => (
  <div>
    <h2>blogs</h2>
    {name} logged in
    <br/>
    <br/>
    {
      blogs.map(blog =><Blog key={blog.id} blog={blog} />)
    }
  </div>
)

export default Blogs