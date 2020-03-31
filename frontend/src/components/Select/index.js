import React from 'react'
import './styles.css';

export default function Select({ value, onChange, options }) {
  return (
    <div className="select-default">
      <select defaultValue={value} onChange={e => onChange(e.target.value)}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}
