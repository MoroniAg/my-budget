import React from 'react'

export default function CardValue( {name, icon}:{name:string, icon: string} ) {
  return (
    <div>{name} {icon}</div>
  )
}
