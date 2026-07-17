"use client"
import React, { useRef, useState } from 'react'

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
      color: "green",
    },
  ]

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedColour, setselectedColour] = useState("");
  const target = useRef(null);

  const ClientFunction = (buttonName, buttonColor) =>()=> {
    setSelectedButton(buttonName)

    if(target.current) {
      clearTimeout(target.current);
    }

    target.current = setTimeout(() => {
      setselectedColour(buttonColor);
    }, 3000);

  }


  return (
    <div>
      {
        threeButtonObject.map((button) => {
          return (
            <button key={button.name} style={{ backgroundColor: button.color ,padding: "10px", margin: "5px", height: "100px", width: "100px", borderRadius:"50%",
              border: "1px solid #ccc", color: "black", fontSize: "16px", cursor: "pointer"
             }} 
             
             onClick={ClientFunction(button.name, button.color)}
            >
              {button.name}
            </button>
          )
        })  
      }
      <h1 style={{color:selectedColour}}>{selectedButton}</h1>
    </div>
  )
}

export default ThreeButtonProblem