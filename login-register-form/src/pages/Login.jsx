import React, { useState } from "react";

// component that is imported by main App.js file to display
export const Login = (props) => {

    // update functionionality for email and password
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // action when submitting form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    // what is displayed - return value
    return (
        <div className="App">
        <div className="auth-form-container">
            <h2>Log In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} type="email" placeholder="youremail@example.com" id="email" name="email"/>

                <label htmlFor="password">password</label>
                <input value={pass} type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Log In</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}