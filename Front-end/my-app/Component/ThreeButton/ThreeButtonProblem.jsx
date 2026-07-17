"use client"
import React, { useState } from 'react'

function ThreeButtonProblem() {
  const threeButtonObject = [
    {
      name: "yellow",
      color: "yellow",
    },
    {
      name: "blue",
      color: "blue",
    },
    {
      name: "red",
      color: "red",
    },
  ]

  const [selectedButton, setSelectedButton] = useState(null)
  return (
    <div>
      {
        threeButtonObject.map((button) => {
          return (
            <button key={button.name} style={{ backgroundColor: button.color ,padding: "10px", margin: "5px", height: "100px", width: "100px", borderRadius:"50%",
              border: "1px solid #ccc", color: "black", fontSize: "16px", cursor: "pointer"
             }} 
             
             onClick={() => setSelectedButton(button.name)}
            >
              {button.name}
            </button>
          )
        })  
      }
      <h1>{selectedButton}</h1>
    </div>
  )
}

export default ThreeButtonProblem