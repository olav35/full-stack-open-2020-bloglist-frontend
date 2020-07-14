import React, {useState} from 'react'

// returns the css object to show or hide an element
const show = (visible) => ({ display: visible ? '' : 'none'})

const Toggleable = (props) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={show(!visible)}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={show(visible)}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
}

export default Toggleable