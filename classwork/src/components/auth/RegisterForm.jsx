// components/RegisterForm.jsx
import React, { use, useState } from "react";
import { useRegisterUser } from "../../hooks/useRegisterUser";
import { useRegisterUserTan } from "../../hooks/useRegisterUserTan";


export default function RegisterForm() {
  // const {
  //   register,
  //   error,
  //   data,
  //   isLoading,
  //   email,
  //   username,
  //   password,
  //   firstName,
  //   lastName,
  //   setEmail,
  //   setFirstName,
  //   setLastName,
  //   setPassword,
  //   setUsername,
  // } = useRegisterUser(); // manual hook 
   

  // tanstack hooks  -------- automatic - state and fucntion is manage or everythings is already is given 
  const {mutate , data, error , isPending , isSuccess , isError}  = useRegisterUserTan()  
  const [email, setEmail] = useState("")
  const[firstName , setFirstName] = useState("")
  const[lastName , setLastName] = useState("")
  const[username , setUsername] = useState("")
  const [password , setPassword] = useState("") 

  const handleSubmit = async (e) => {
    // if (!email || !username || !password || !firstName || !lastName) {
    //   alert("All fields are required");
    //   return;
    // }

    const formData = {
      email : "admin@123gmail.com",
      username : 'admin123',
      password : "password123",
      firstName : "admin",
      lastName : "chau",
    };

    // const result = await register(formData);
    const result  = mutate(formData) // replace register() -> 
    if (result) {
      console.log("Registration successful");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
        {/* <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-400 p-2 rounded"
        /> */}
        {/* <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 p-2 rounded"
        /> */}
        {/* <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-gray-400 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border border-gray-400 p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 p-2 rounded"
        /> */}

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          {isPending ? "Registering..." : "Register"}
        </button>

      {error && <p className="text-red-500 mt-4">{error.message}</p>}
      {data && <p className="text-green-500 mt-4">{data.message}</p>}
    </div>
  );
}
