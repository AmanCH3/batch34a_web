import React, { useEffect, useState } from 'react'

export default function LoginState() {
    const[name , setName] = useState("")

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [message , setMessage] = useState("Please provide information")


    useEffect (
        () => {

        } ,
        []
    )

        // is the na
    useEffect (
        () => {
            if(name === 'Saroj'){
                setMessage("Welcome Saroj")

            }
        
        } ,
        [message]
    )


    useEffect (
        () => {
        

        }
    )

    const handleSubmit = (e) => {
        setEmail
        setMessage
        setPassword
        if(email.length === 0 || password.length === 0){
            setMessage("Provide all information")
        }
        else{
            setMessage("Congratulation")
        }
    
    }

  return (
    
    <div className='flex flex-col items-center gap-8'>
        {message}
        <input type="text" placeholder='Name' className="border border-gray-400 p-2 rounded" onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='Email' className="border border-gray-400 p-2 rounded" onChange={(e) => setEmail(e.target.value)}/>
        <input type='text' placeholder='Password' className="border border-gray-400 p-2 rounded" onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>


      
    </div>
  )
}
