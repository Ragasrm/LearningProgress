// make a API call and display the data in a list format from JSONPlaceholder API. Use useEffect and useState hooks to fetch the data and display it in a list format.
// API is https://jsonplaceholder.typicode.com/posts
'use client'
import React, { useEffect, useState } from 'react'

function List() {
  const [first, setfirst] = useState([])



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => {
      setfirst(data)
    })     

  }, [])

  return (
    <div>
      {first.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default List