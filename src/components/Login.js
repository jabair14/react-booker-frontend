import { useHistory } from "react-router-dom"
import React, { useState } from "react"


function Login () {

    const [showSignup, setSignup] = useState(false)
    const [showLogin, setLogin] = useState(false)

    const history = useHistory()

    const toggleSignupForm = () => {
        setSignup(showSignup => !showSignup)
    }

    const toggleLoginForm = () => {
        setLogin(showLogin => !showLogin)

    }
    return (
        <>
        
       <br/>
       <br/>
        <button onClick={toggleLoginForm} type="button" class="btn btn-primary btn-lg">Login</button>
        <form className="login-form" style={{ display: showLogin? "" : "none" }}>
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
    
       
        <br/>
            <button onClick={toggleSignupForm} type="button" class="btn btn-secondary btn-lg">Signup</button>
        <form className="signup-form" style={{ display: showSignup ? "" : "none" }}>
       
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