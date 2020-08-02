import React from 'react'

const Login = (props) => {
  const {
    onLogin,
    username,
    password,
    onUsernameChange,
    onPasswordChange
  } = props

  return (
    <form id="login-form" onSubmit={onLogin}>
      <h2>log in to application</h2>
      <b>username:</b><input id="username-input" onChange={onUsernameChange} value={username}/>
      <br/>
      <b>password:</b><input id="password-input" type="password" onChange={onPasswordChange} value={password}/>
      <br/>
      <input type="submit" value="Login"/>
    </form>
  )
}

export default Login