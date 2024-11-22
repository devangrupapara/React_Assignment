import React from 'react'
import { useState } from 'react'


const MyfristComponet = () => {
  const [name,setName] = useState("")
  const [data,setData] = useState([])
 const hendal = (e)=>{setName(e.target.value)}


  const dataEdit = ()=>{
      setData([
          ...data,
          name
      ])
  }
return (
  <div>
    <form action="" onSubmit={dataEdit}>
      name:  <input type="text" id="datal" onChange={hendal } value={name}/>
      <input type="subimt " value="add"/>
    </form>

    <table action="#" border={'2'}>
      <tr >
          <td>data</td>
          <td>action</td>
      </tr>
      
    </table>
  </div>
)
}

export default MyfristComponet
