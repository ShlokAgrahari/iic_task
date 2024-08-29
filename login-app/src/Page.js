import React, { useState } from 'react'
import './Page.css'
const Page = () => {
    const [c,set]=useState("")
  return (
    <div className='container'>
        <div className='box1'></div>
        <div className={`box2 ${c}`}>
            <button onClick={()=>set("move")}>click</button>
        </div>
        <div className='box3'></div>
        
    </div>
  )
}

export default Page