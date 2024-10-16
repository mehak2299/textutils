import React from 'react'

export default function Button({count,handleClick}) {
  return (
    <div>
        <button onClick={handleClick}> 
         Button Click {count} times
        </button>
    </div>
  )
}
