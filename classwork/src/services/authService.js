// How data is send 
import  {registerUserApi} from "../api/authApi"

export const registerUserService = async (formData) => {
    try {
        const response = await registerUserApi(formData)
        return response.data
        console.log(response)

    }
    catch(err){
        console.log(err)
        throw err.response?.data || {message : "Registration Failed"}
    }
}

// implementation of the apiLayer

