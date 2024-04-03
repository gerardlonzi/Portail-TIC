import React from 'react'

interface props {
    Prev : ()=> void
    Next : ()=> void
    IsFirstStep : ()=> boolean
    IsLastStep : ()=> boolean
}

const Footertab = ({Prev,
    Next,
    IsFirstStep,
    IsLastStep,
    }:props) => {
  return (
    <div>Footertab</div>
  )
}

export default Footertab