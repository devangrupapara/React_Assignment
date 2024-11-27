import React, { useEffect, useState } from 'react'
import axios  from 'axios'

const Fakeapi = () => {
    const [data,setDate] = useState([]);
    const [view,setView] = useState(null);
    
    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then((res)=> setDate(res.data))


      // fetch('https://fakestoreapi.com/products')
      // .then(res=>res.json())
      // .then(json=>setDate(json)) 
    })
     
    const viewData = (i)=>{
      setView(i)
    }

  return (
    <div>
      <h3>Fake Api Calling</h3>
      <table border={2}>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Price</th>
          <th>category</th>
          <th>Action</th>
        </tr>
        
          {
            data.map((i)=>{
              return(
                <tr>
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                  <td>{i.price}</td>
                  <td>{i.category}</td>
                  <td><button onClick={ () => viewData(i)}>view</button></td>
                </tr>
              )

            })
          }
        
      </table>

      {
      
          view && (
            <div>
              <tbody>
                <p>{view.id}</p>
                <p>{view.title}</p>
                <p>{view.price}</p>
                <p>{view.category}</p>
              </tbody>
            </div>
          )
      
      }
    </div>
  )
}

export default Fakeapi;