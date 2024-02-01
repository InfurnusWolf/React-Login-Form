// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { useNavigate, Link } from "react-router-dom"

// import "./Signup.css";
// function Signup() {
//     const history=useNavigate();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const [isSubmitting, setIsSubmitting] = useState(false); // new state variable

//     async function submit(e) {
//         e.preventDefault();
    
//         setIsSubmitting(true); // disable the button
    
//         await axios.post("http://localhost:3000/signup", {
//             email, password
//         })
//         .then(res => {
//             if (res.data == "User added") {
//                 alert("User created sucessfully");
//                 history("/home", { state: { id: email } });
//             }
//         })
//         .catch(e => {
//             if (e.response && e.response.data == "User already exists") {
//                 alert("User already exists");
//             }
//              else {
//                 alert("An error occurred");
//                 console.log(e);
//             }
//         })
//         .finally(() => {
//             setIsSubmitting(false); // enable the button
//         });
//     }


//     return (
//         <div className="login">

//             <h1>Signup</h1>

//             <form action="POST">
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
//                 <button type='button' disabled={isSubmitting} onClick={submit}>Sign Up</button>

//             </form>

//             <br />
//             <p>OR</p>
//             <br />

//             <Link to="/">Login Page</Link>

//         </div>
//     )
// }

// export default Signup


// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import './Signup.css'
// import { useNavigate, Link } from "react-router-dom"


// function Signup() {
//     const history=useNavigate();
    
//     const [username,setusername]=useState('')
//     const [userClass,setuserClass]=useState('')
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const [isSubmitting, setIsSubmitting] = useState(false); // new state variable

//     async function submit(e) {
//         e.preventDefault();
    
//         setIsSubmitting(true); // disable the button
    
//         await axios.post("http://localhost:3000/signup", {
//             email, password, username, userClass
//         })
//         .then(res => {
//             if (res.data === "User added") {
//                 alert("User created sucessfully");
//                 history("/home", { state: { id: email } });
//             }
//         })
//         .catch(e => {
//             if (e.response && e.response.data === "User already exists") {
//                 alert("User already exists");
//             }
//              else {
//                 alert("An error occurred");
//                 console.log(e);
//             }
//         })
//         .finally(() => {
//             setIsSubmitting(false); // enable the button
//         });
//     }


//     return (
//         <div className="signup">

//             <h1>Signup</h1>

//             <form action="POST">
//                 <input type="username" onChange={(e) => { setusername(e.target.value)}} placeholder="Username"/>
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//                 <input type="userClass" onChange={(e) => { setuserClass(e.target.value) }} placeholder="Class"  />
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
//                 <button type='button' disabled={isSubmitting} onClick={submit}>SUBMIT</button>

//             </form>

            
//             <p>Already registered<Link to="/Login">Login Page</Link></p>

            

//         </div>
//     )
// }

// export default Signup


import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Signup.css';

function Signup() {
    const history = useNavigate();
    
    const [username, setusername] = useState('');
    const [userClass, setuserClass] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function submit(e) {
        e.preventDefault();
    
        setIsSubmitting(true);
    
        await axios.post("http://localhost:3000/signup", {
            email, password, username, userClass
        })
        .then(res => {
            if (res.data === "User added") {
                alert("User created sucessfully");
                history("/home", { state: { id: email } });
            }
        })
        .catch(e => {
            if (e.response && e.response.data === "User already exists") {
                alert("User already exists");
            } else {
                alert("An error occurred");
                console.log(e);
            }
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    }

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form action="POST">
                <input type="username" onChange={(e) => { setusername(e.target.value)}} placeholder="Username"/>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <select value={userClass} onChange={(e) => { setuserClass(e.target.value) }}>
                    <option value="">Select Class</option>
                    {[...Array(10)].map((_, i) => 
                        <option key={i} value={i+1}>Class {i+1}</option>
                    )}
                </select>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <button type='button' disabled={isSubmitting} onClick={submit}>SUBMIT</button>
            </form>
            <p>Already registered<Link to="/Login">Login Page</Link></p>
        </div>
    )
}

export default Signup;