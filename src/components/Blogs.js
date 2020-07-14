import React, { useEffect, useState } from 'react'
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
    onSubmitBlog,
    toggleableRef,
    onClickLike,
    user,
    onClickRemoveBlog
  } = props

  const [sortedBlogs, setSortedBlogs] = useState([])


  useEffect(() => {
    setSortedBlogs(blogs.sort((left, right) => {
      const leftLikes = Number(left.likes)
      const rightLikes = Number(right.likes)
      
      if(leftLikes === rightLikes){
        return 0
      } else if(leftLikes < rightLikes) {
        return -1 
      } else {
        return 1
      }
    }))
  }, [blogs])


  return (
    <div>
      <h2>blogs</h2>
      {name} logged in <Logout onLogout={onLogout}/>
      <br/>
      <br/>
      {
        sortedBlogs.map(blog =><Blog key={blog.id}
                                     blog={blog}
                                     onClickLike={onClickLike}
                                     onClickRemoveBlog={onClickRemoveBlog}
                                     user={user}/>)
      }
      <Toggleable buttonLabel="create post" ref={toggleableRef}>
        <CreateBlog blog={newBlog}
                    onChange={onNewBlogChange}
                    onSubmit={onSubmitBlog}/>
      </Toggleable>  
    </div>
  )
}

export default Blogs