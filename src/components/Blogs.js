import React from 'react'
import Blog from './Blog'
import Logout from './Logout'
import CreateBlog from './CreateBlog'
import Toggleable from './Toggleable'

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
      <Toggleable buttonLabel="create post">
        <CreateBlog blog={newBlog}
                    onChange={onNewBlogChange}
                    onSubmit={onSubmitBlog}/>
      </Toggleable>  
    </div>
  )
}

export default Blogs