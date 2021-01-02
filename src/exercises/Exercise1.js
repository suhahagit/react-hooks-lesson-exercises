import React, {useState} from 'react'

export default function Exercise1() {

  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const countries = ['united states', 'china', 'united kingdom', 'australia']

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input placeholder='name' type="text" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder='city' type="text" value={city} onChange={e => setCity(e.target.value)} />
        <select name="countries" id="countries" onChange = {e => setCountry(e.target.value)}>
          {countries.map(c => <option key = {c} value = {c}>{c}</option>)}
        </select>
      </div>
    </div>
  )
}