import { useHistory } from "react-router-dom"
import React, { useState } from "react"


function Login () {

    const [showForm, setShowForm] = useState(false)

    const history = useHistory()

    const toggleSignupForm = () => {
        setShowForm(showForm => !showForm)
    }
    return (
        <>
        <h1>Login</h1>
        <form className="login-form">
            <label> username </label>
            <br></br>
            <input type="text"/>
            <br></br>
            <label> password </label>
            <br></br>
            <input type="password"/>
            <br></br>
            <br></br>
            <button type="submit">Login</button>
            <br></br>
            <br></br>
        </form>
        <ln></ln>
            <button onClick={toggleSignupForm}>Signup</button>
        <form className="signup-form" style={{ display: showForm ? "" : "none" }}>
       
            <label> name </label>
            <br></br>
            <input type="text"/>
            <br></br>
            <label> username </label>
            <br></br>
            <input type="text"/>
            <br></br>
            <label> password </label>
            <br></br>
            <input type="text"/>
            <br></br>
            <label> location </label>
            <br></br>
            <input type="text"/>
            <br></br>
            <label> avatar </label>
            <br></br>
            <input type="text"/>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
            <br></br>
            <br></br>
        </form>

        </>

    )
}

export default Login;