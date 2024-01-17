import React from 'react'
import CardValue from '../../components/CardValue'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="grid">
      <div className="col-4">
        <CardValue name='Categorias'
          icon='pi pi-book'
          value='5'
          styleValue='color-ff6066' />
      </div>
      <div className="col-4">
        <CardValue name='Ingresos'
          icon='pi pi-book'
          value='1350'
          styleValue='color-ffa559' />
      </div>
      <div className="col-4">
        <CardValue name='Egresos'
          icon='pi pi-book'
          value='900'
          styleValue='color-ffa559' />
      </div>


    </div>
  )
}
