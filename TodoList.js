import React, { useState } from 'react'

function TodoList() {

  const [activity,setActivity]=useState("")
  const [listData,setListData]=useState([])

  function addActivity(){
    setListData((listData)=>{
      const updatedList=[...listData,activity]
      console.log(updatedList)
      setActivity('')
      return updatedList
    })

  }

  function removeActivity(i){
    const updatedList=listData.filter((element,id)=>{return i!==id}  )
    setListData(updatedList)

  }

  function removeAll(){
    setListData([])
  }

  return (
   <>
    <div className='container'>
      <div className='header'>TODOLIST</div>
      <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
    <button onClick={addActivity}>Add</button>
    <p className='listHeading'>::Your Todos::</p>

    {listData!==[] && listData.map((data,i)=>{
      return(
        <>
          <p key={i}>
          <div className='listData'>{data}</div>
          <div className='btn-position'><button onClick={()=>removeActivity(i)}>Remove</button></div>
          

          </p>
        </>
      )
    })}

    {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}

    
    </div>
   </>
  )
}

export default TodoList