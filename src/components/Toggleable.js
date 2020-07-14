import React, {useState, useImperativeHandle} from 'react'

// returns the css object to show or hide an element
const show = (visible) => ({ display: visible ? '' : 'none'})

const Toggleable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

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
)

export default Toggleable