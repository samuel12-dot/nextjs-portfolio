import React from 'react'

export default function MainTitle({text, color}) {
  return (
    <div>
        <h2 className={`${color} h2 `}>{text}</h2>
    </div>
  )
}
