import React from 'react'

export default function Actor(props) {
    const {name,age,style}=props
  return (
      <div className={style}>
          <h1> The Great Actor is : {name}</h1>
          <h1> The age of {props.name} is : {age}</h1>
    </div>
  )
}
