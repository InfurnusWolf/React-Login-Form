import React, { useEffect, useState } from "react"
import axios from "axios"
import './Login.css'
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/login",{
                username,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:username}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <button type="button" onClick={submit} >Submit</button>

            </form>

           <p>Not Registered<Link to="/Signup">Signup</Link></p>

        </div>
    )
}

export default Login
