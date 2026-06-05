import { useState } from "react";

export default function RegisterForm(props) {

   
    return <>
        <div>
            <label>Email:</label>
            <input type="text" value={props.email} 
            onChange={e => props.setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" value={props.password}
             onChange={e => props.setPassword(e.target.value)}/>
        </div>
        <button>Register</button>
    
    </>
}