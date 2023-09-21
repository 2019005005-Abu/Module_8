import React from 'react'

export const Props = (props) => {
  return (
    <div>
        <button onClick={props.add}>Increment</button>
        <button onClick={props.sub}>Decrement</button>
    </div>
  )
}
