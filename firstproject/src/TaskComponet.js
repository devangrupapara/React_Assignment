import React from 'react'

const TaskComponet = () => {
    let arr = ["Use Array .map ", "Not a for Loop", "Give each item a unique key", "Aviod using array index as the key"]
    return (
        <div id='main-task'>
            <h1>The "React Way" to Render a List</h1>
            <div className='task'>

                <ul>
                    {
                        arr.map((i, index) => {
                            return <li key={index}>{i}</li>

                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default TaskComponet
