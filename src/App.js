import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Axios from 'axios'
import Login from './components/Login'
import Blogs from './components/Blogs'
import Notification from './components/Notification'
import './App.css'

const emptyBlog = {
  title: '',
  url: '',
  author: ''
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [newBlog, setNewBlog] = useState({...emptyBlog})
  const [notification, setNotification] = useState(null)

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

  const handleLogout = (event) => {
    setUser(null)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleNewBlogChange = (event) => {
    const key = event.target.getAttribute('data-key')
    let blog = {...newBlog}
    blog[key] = event.target.value
    setNewBlog(blog)
  }

  const handleSubmitBlog = async (event) => {
    try {
      event.preventDefault()
      const blog = await blogService.create(newBlog, user.token)
      setBlogs(blogs.concat(blog))
      setNewBlog({...emptyBlog})
      setNotification({type: 'success', message: 'Posted succesfully'})
    } catch(error) {
      setNotification({type: 'failure', message: error.message})
    }
  }

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )

    const storedUser = window.localStorage.getItem('user')
    if(storedUser !== undefined) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    if(user === null){
      window.localStorage.removeItem('user')
    } else {
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  return (
    <div>
      {notification && <Notification notification={notification}/>}
      { 
        user === null ? (
          <Login onLogin={handleLogin}
                username={username}
                password={password}
                onPasswordChange={handlePasswordChange}
                onUsernameChange={handleUsernameChange}/>
        ) : (
          <Blogs blogs={blogs}
                 name={user.name}
                 onLogout={handleLogout}
                 newBlog={newBlog}
                 onNewBlogChange={handleNewBlogChange}
                 onSubmitBlog={handleSubmitBlog}/>
        )
      }
    </div>
  )
}

export default App