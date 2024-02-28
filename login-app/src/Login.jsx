import React, { useState } from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
//ANCHOR - login (h3), email and password input 
    return (
        <div className="auth-form-container">
            <h3>Log in</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input type="email" placeholder="your email" id="email" name="email" className="text_area" />
                <label htmlFor="password">password</label>
                <input type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            
        </div>
    )
}