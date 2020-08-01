import React from 'react'

const CreateBlog = ({ blog, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <h2>create new</h2>
    <b>title:</b><input data-key="title" onChange={onChange} value={blog.title}/>
    <br/>
    <b>author:</b><input data-key="author" onChange={onChange} value={blog.author}/>
    <br/>
    <b>url:</b><input data-key="url" onChange={onChange} value={blog.url}/>
    <br/>
    <input type="submit" value="create"/>
  </form>
)

export default CreateBlog