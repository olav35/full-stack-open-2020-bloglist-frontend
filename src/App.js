import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Axios from 'axios'

const Login = (props) => {
  const {
    onLogin,
    username,
    password,
    onUsernameChange,
    onPasswordChange
  } = props

  return (
    <form onSubmit={onLogin}>
      <b>username:</b><input onChange={onUsernameChange} value={username}/>
      <br/>
      <b>password</b><input type="password" onChange={onPasswordChange} value={password}/>
      <br/>
      <input type="submit" value="Login"/>
    </form>
  )
}

const Blogs = ({blogs}) => (
  <div>
    <h2>blogs</h2>
    {
      blogs.map(blog =><Blog key={blog.id} blog={blog} />)
    }
  </div>
)

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    const credentials = {
      username,
      password
    }

    try {
      const response = await Axios.post('/api/login', credentials)
      setUser(response.data)
      setUsername('')
      setPassword('')
    } catch(error) {}
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  return (
    <div>
      { 
        user === null ? (
          <Login onLogin={handleLogin}
                username={username}
                password={password}
                onPasswordChange={handlePasswordChange}
                onUsernameChange={handleUsernameChange}/>
        ) : (
          <Blogs blogs={blogs}/>
        )
      }
    </div>
  )
}

export default App