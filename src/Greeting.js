import React from 'react'
export function Greeting(){
    let isMorning = (new Date()).getHours()<12;
    return isMorning
    ? <h3>Good morning.</h3>
    : <h3>Good evening.</h3>
}
