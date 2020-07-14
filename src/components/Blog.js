import React, { useState } from 'react'
import propTypes from 'prop-types'

const Blog = ({ blog, onClickLike, user, onClickRemoveBlog }) => {
  const [fullView, setFullView] = useState(false)

  const toggleFullView = () => setFullView(!fullView)

  return (
    <div>
      {fullView && <br/>}
      {blog.title} {blog.author} <button onClick={toggleFullView}>{fullView ? 'hide' : 'view'}</button>
      {
        fullView && (
          <div>
            {blog.url}
            <br/>
            likes {blog.likes} <button data-id={blog.id} onClick={onClickLike}>like</button>
            <br/>
            {blog.user.name}
            {blog.user.username === user.username && <button data-id={blog.id} onClick={onClickRemoveBlog}>remove</button>}
          </div>
        )
      }
      {fullView && <br/>}
    </div>
  )
}

Blog.propTypes = {
  blog: propTypes.object.isRequired,
  onClickLike: propTypes.func.isRequired,
  user: propTypes.object.isRequired,
  onClickRemoveBlog: propTypes.func.isRequired
}

export default Blog
