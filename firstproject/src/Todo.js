import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const Todo = () => {
    const [name, setName] = useState('')
    const[id,setId]= useState('')
    const [data, setData] = useState([])
    const handleChangem = (e) => {
        setName(e.target.value)

    }


    const saveData = (e) => {
        e.preventDefault()

        if(id!=''){
            let ras = data.map((i,index)=>{
              if(index===id){
                i = name
                // i = age
    
              } return i
    
            })
            setData(ras)
            setId('')
          }else{
            setData([ ...data,
               name])
          }
          setName('')
        //   setAge('')
    
        }
    
    const delData = (id) => {
        let dele = data.filter((i, index)=>{
            return index != id

        })
        setData(dele)
    }
    const addData = (id) => {
        let adda = data.filter((i, index) => {
            return index == id

        })
        setName(adda)
    }

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
         <div className='todo'>
            <table border={'2'} className='tebletodo'>
                {
                    data.map((i, index) => {
                        return (
                            <tr>
                                <td className='bkgtodo'>{i}</td>
                                <td>
                                    <button className='todobutt' onClick={() => delData(index)}>      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton></button>
                                    <button onClick={() => addData(index)}>add</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
           
                <form action='#' onSubmit={saveData}>
                    <div className="mainto">
                    <input type="text" name="name" placeholder='Add something to your list' id='names' onChange={handleChangem} value={name} /><br />
                    <input type='submit' value='add'  id='buttonadd' className='todobutt' /></div>
                </form>
            </div>

        </>
    )
}

export default Todo
