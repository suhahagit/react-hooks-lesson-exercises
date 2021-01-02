import React, { useState, useEffect } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  const [expenses, setExpenses] = useState([])
  const [month, setMonth] = useState(0)


  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  useEffect(() => {
    (async () => {
      const expenses = await fetchExpenses(month)
      setExpenses(expenses)
    })()
  }, [month])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select name="" id="" onChange={e => setMonth(e.target.value)}>
          {months.map((m, i) => <option key={i} value={i}>{m}</option>)}
        </select>
        {expenses.map((e, i) => <p key = {i}>item:{e.item} amount:{e.amount} date: {e.date}</p>)}
      </div>
    </div>
  )
}