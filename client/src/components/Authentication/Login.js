import React, {useState, useContext} from "react"
import {Context} from "../../context/app.context"
import axios from "axios"

export const Login = () =>{
  const [form, setForm] = useState({
    email:"",
    password:""
})  
const auth = useContext(Context)
const changeHandler = (e) =>{
  setForm({...form, [e.target.name]:e.target.value})
}
const login = async() =>{
  const data = await axios.post("/api/auth/login", {...form})
  auth.login(JSON.stringify(data.data))
  console.log(data)
}
  return(
    <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" onChange={changeHandler}  name="email" type="email" className="validate"/>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
              <input id="password" onChange={changeHandler}  name="password" type="password" className="validate"/>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
            </div>
          </div>
          
        </form>
        <input className="btn waves-effect waves-light" onClick={login} type="button"/>
               Вход
        
    </div>
    
    )
}