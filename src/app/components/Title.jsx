import React from 'react'

export default function Title({ text, color }) {
  return (
    <div>
        <h2 className={`${color} h3`} >{text}</h2>
    </div>
  )
}
