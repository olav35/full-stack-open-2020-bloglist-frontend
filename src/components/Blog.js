import React, { useState } from 'react'
const Blog = ({ blog }) => {
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
            likes {blog.likes} <button>like</button> {/* dummy button*/}
            <br/>
            {blog.user.name}
          </div>
        )
      }
      {fullView && <br/>}
    </div>
  )
}

export default Blog
