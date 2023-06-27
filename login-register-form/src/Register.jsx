import React, { useState } from "react";

export const Register = (props) => {

    // component that is imported by main App.js file to display
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    // action when submitting form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    // what is displayed - return value
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">full name</label>
            <input value={name} type="text" placeholder="John Doe" id="fullname" name="fullname"/>

            <label htmlFor="username">username</label>
            <input value={username} type="text" placeholder="johndoe123" id="username" name="username"/>

            <label htmlFor="email">email</label>
            <input value={email} type="email" placeholder="youremail@example.com" id="email" name="email"/>

            <label htmlFor="password">password</label>
            <input value={pass} type="password" placeholder="********" id="password" name="password"/>

            <label htmlFor="confirmPassword">confirm password</label>
            <input value={confirmPass} type="password" placeholder="********" id="confirm-password" name="confirm-password"/>

            <button type="submit">Register</button>

        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here.</button>
    </div>
    )
}