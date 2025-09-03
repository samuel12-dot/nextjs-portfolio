import React from 'react'

export default function Title({ text, color }) {
  return (
    <div>
        <h3 className={`${color} h3`} >{text}</h3>
    </div>
  )
}
