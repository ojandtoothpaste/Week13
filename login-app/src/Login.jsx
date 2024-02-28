import React, { useState } from "react";

//ANCHOR - login (h3), email and password input 
export const Login = (props) => {
    return (
        <div className="auth-form-container">
            <h3>Log in</h3>
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input type="email" placeholder="your email" id="email" name="email" className="text_area" />
                <label htmlFor="password">password</label>
                <input type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            
        </div>
    )
}