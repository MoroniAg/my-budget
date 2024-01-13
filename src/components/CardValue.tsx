import React from 'react'
import { Card } from 'primereact/card';
import { classNames } from 'primereact/utils';

export default function CardValue(
  { name,
    icon = "pi pi-times",
    value = "0",
    styleValue = "text-color"
  }
    : {
      name: string,
      icon?: string,
      value?: string,
      styleValue?: string
    }) {

  const tittle = () => {
    return (
      <div className='grid p-3'>
        <div className="col-11">
          <span className='text-2xl'>{name}</span>
        </div>
        <div className="col-1">
          <span className={classNames(icon, 'text-2xl')}></span>
        </div>
      </div>
    )
  }


  return (

    <Card title={tittle} className='' >
      <div className='flex align-items-center justify-content-center m-0'>
        <span className={classNames('text-7xl', styleValue)}>{value}</span>
      </div>

    </Card>

  )
}
