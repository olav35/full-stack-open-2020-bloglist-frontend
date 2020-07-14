import React from 'react'
import Blog from './Blog'
import Logout from './Logout'

const Blogs = ({blogs, name, onLogout}) => (
  <div>
    <h2>blogs</h2>
    {name} logged in <Logout onLogout={onLogout}/>
    <br/>
    <br/>
    {
      blogs.map(blog =><Blog key={blog.id} blog={blog} />)
    }
  </div>
)

export default Blogs