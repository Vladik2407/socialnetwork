import {} from "react"
import axios from "axios"
export const useRegister = () =>{
    const register = async(email, name, password) =>{
        await axios.post("/register", {email,name,password})
    }
    return {register}
}