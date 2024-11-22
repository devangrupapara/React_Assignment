import React, { useState } from 'react'

const Twocomponet = (reh) => {
    const [name,setName]=useState('oyyyy')
    const [col,setCol] = useState('red')
    const [ccs,setCcs] = useState('pink')
    const changName =()=>{
        setName('devang')
        setCol('gold')
        setCcs('black')
    }
  return (
    <div>
     <h1>name is  {reh.myname}</h1> 
     <h1>age is  {reh.age}</h1> 
     <h2 style={{color:col,backgroundColor:ccs}}>name is {name}</h2>
     <button onClick={changName}> <h1>chang Name</h1></button>
    </div>
  )
}

export default Twocomponet
