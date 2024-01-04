import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isSubmitting, setIsSubmitting] = useState(false); // new state variable

    async function submit(e) {
        e.preventDefault();
    
        setIsSubmitting(true); // disable the button
    
        await axios.post("http://localhost:3000/signup", {
            email, password
        })
        .then(res => {
            if (res.data == "User added") {
                alert("User created sucessfully");
                history("/home", { state: { id: email } });
            }
        })
        .catch(e => {
            if (e.response && e.response.data == "User already exists") {
                alert("User already exists");
            }
             else {
                alert("An error occurred");
                console.log(e);
            }
        })
        .finally(() => {
            setIsSubmitting(false); // enable the button
        });
    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <button type='button' disabled={isSubmitting} onClick={submit}>Sign Up</button>

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>

        </div>
    )
}

export default Signup