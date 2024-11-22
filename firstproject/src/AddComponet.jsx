import React from 'react'

const AddComponet = () => {
 let names = "abc"
 let arr =[10,20,30,40,50,60]
 let project = arr.map((i)=>{
 return <li>{i}</li>
 })
  return (
    <div>
        <h1>Hello</h1>
        <h2>My Componet</h2>
        <h5>addition is -- {95+83}</h5>
        <h1>{names}</h1>
        <ul>
          {project}
        </ul>
        
    </div>
  )
}

export default AddComponet
