import {useState, useCallback, useEffect} from "react"

export const useAuth = () =>{
    const storageName = "UserData"
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const login = useCallback(async(jwtToken, id) =>{
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({token:jwtToken}))
    }, [])
    const logout = useCallback(async() =>{
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data && data.token){
            login(data.token, data.id)
        }
    },[login])
    return {login, logout, token, userId}
}