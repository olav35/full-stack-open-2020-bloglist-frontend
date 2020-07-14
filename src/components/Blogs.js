import React from 'react'
import Blog from './Blog'
import Logout from './Logout'
import CreateBlog from './CreateBlog'

const Blogs = (props) => {
  const {
    blogs,
    name,
    onLogout,
    newBlog,
    onNewBlogChange,
    onSubmitBlog
  } = props

  return (
    <div>
      <h2>blogs</h2>
      {name} logged in <Logout onLogout={onLogout}/>
      <br/>
      <br/>
      {
        blogs.map(blog =><Blog key={blog.id} blog={blog} />)
      }
      <CreateBlog blog={newBlog}
                  onChange={onNewBlogChange}
                  onSubmit={onSubmitBlog}/>
    </div>
  )
}

export default Blogs