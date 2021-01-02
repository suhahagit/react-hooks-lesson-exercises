import React, { useState, useEffect } from 'react'

const axios = require('axios');

export default function Exercise2() {
  
  const [users, setUsers] = useState([])
  
  useEffect(() => {(async () => {
    const apiUsers = await axios.get('https://randomuser.me/api/?results=5')
    setUsers(apiUsers.data.results)})()
  }, [])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map(u => <p  key = {u.cell}>
        First Name: {u.name.first} 
        Last Name: {u.name.last} 
        Thumbnail: {u.picture.thumbnail}
        </p>)}
      </div>
    </div>
  )
}