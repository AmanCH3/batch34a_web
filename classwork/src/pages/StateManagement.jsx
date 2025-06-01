import React, { useEffect, useState } from 'react'

export default function StateManagement() {

    //useState
    // 1. data 2. updateFunction as a argument
    const [data , setData] = useState('My data') // Default value or initial value of the data 
    const [num , setNum] = useState(0) // new state num is the actual data and setNum is state the change the actual data
    const updatingData = () => {
        setData("New Data")
    }

    //dependency updater
    // what to when certain data is changed and you have to put extra logic
    //useEffect 

    useEffect (
        () => {
            if(data ==  "Hello world"){
                setNum(1000000)
            }
        } ,

        [data] //dependencies
    )
    

    // useEffect in Intial
    useEffect (
        () => {
            setNum(-90)
            setData("Initial value")
        } ,
        [] // leave empty to run when component loads
    )



  return (
    <div className='flex flex-col gap-y-10 items-center '>
       {data}
       <div className='flex flex-row space-x-4'>

    <button className='bg-orange-200'  onClick={updatingData}>Click me</button>
    <button className='bg-lime-300' onClick={
        () => {
            setData("From callback ")
        }
    }>Click Callback</button>
    </div>
    <div className='space-y-6' >
        {num}
        <div  className='flex flex-row space-x-6'>

        <button onClick={() => setNum(num+1)}>
            +
        </button>
        <button onClick={() => setNum(num-1)}>
              -
        </button>
        </div>
    </div>
    
    <div>
    <input
  className="border border-gray-400 p-2 rounded"
  placeholder="Type something..."
  onChange={(e) => {
    setData(e.target.value)
  }}
/>

    </div>

    </div>
  )
}

