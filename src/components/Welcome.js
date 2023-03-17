import React from 'react'
import CallToAction from './CallToAction'

export default function Welcome() {
    const title = 'Bienvenido'
    const buttonText = 'Ingrese al sitio'
  return (
    <div>
        <h1>{title}</h1>
        <CallToAction linkTo='events' buttonText={buttonText} />
    </div>
  )
}
