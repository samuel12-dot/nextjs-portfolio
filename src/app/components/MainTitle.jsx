import React from 'react'

export default function MainTitle({text, color}) {
  return (
    <div>
        <h2 className={`${color} h2 xl sm:2xl`}>{text}</h2>
    </div>
  )
}
