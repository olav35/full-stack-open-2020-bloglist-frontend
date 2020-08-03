import React from 'react'

const CreateBlog = ({ blog, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <h2>create new</h2>
    <b>title:</b><input data-key="title" id="title-input" onChange={onChange} value={blog.title}/>
    <br/>
    <b>author:</b><input data-key="author" id="author-input" onChange={onChange} value={blog.author}/>
    <br/>
    <b>url:</b><input data-key="url" id="url-input" onChange={onChange} value={blog.url}/>
    <br/>
    <input type="submit" id="create-blog-input" value="create"/>
  </form>
)

export default CreateBlog