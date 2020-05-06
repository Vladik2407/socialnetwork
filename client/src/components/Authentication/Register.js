import React, {useState} from "react"
import axios from "axios"


export const Register = () =>{
    const [form, setForm] = useState({
        email:"",
        name:"",
        password:""
})
    const registerHandler = async() =>{
    await axios.post("/api/auth/register", {...form})      
    }
    const changeHandler = (e) =>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    
   return(
    <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" value={form.email} onChange={changeHandler}  name="email" type="email" className="validate"/>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
              <input id="name" value={form.name} onChange={changeHandler} name="name" type="text" className="validate"/>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
              <input id="password" value={form.password} onChange={changeHandler} name="password" type="password" className="validate"/>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
            </div>
            <input type="button" value="Регистрация" onClick={registerHandler} className="btn waves-effect waves-light"/>
          </div>
        </form>
    </div>
    
    )
}