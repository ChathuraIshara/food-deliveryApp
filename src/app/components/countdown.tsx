'use client'
import React from 'react'
import Countdown from 'react-countdown'

function CountDown() {
    const endingDate=new Date("2024-09-29");


  return (
    <div className='text-yellow-300 font-bold text-5xl'>
     <Countdown date={endingDate}></Countdown>
    </div>
  )
}

export default CountDown;