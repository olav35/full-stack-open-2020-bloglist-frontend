import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Axios from 'axios'
import Login from './components/Login'
import Blogs from './components/Blogs'

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
          <Blogs blogs={blogs} name={user.name}/>
        )
      }
    </div>
  )
}

export default App