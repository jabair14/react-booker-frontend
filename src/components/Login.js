import { useHistory } from "react-router-dom"
import React, { useState } from "react"
import { Button, Checkbox, Form, Card } from 'semantic-ui-react'


function Login() {

    const [showSignup, setSignup] = useState(false)
    const [showLogin, setLogin] = useState(false)
    const [showBtn, setShowBtn] = useState(true)

    const history = useHistory()

    const toggleSignupForm = () => {
        setSignup(showSignup => !showSignup)
    }

    const toggleLoginForm = () => {
        setLogin(showLogin => !showLogin)
    }


    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{ width: "100%", align: "left" }}>
                <div className="container-fluid">
                    {/* <div className="login-button"> */}
                    <button onClick={toggleLoginForm} type="button" className="btn btn-primary btn-sm">Login</button>
                    {/* </div> */}
                    {/* <div className="signup-button"> */}
                    <button onClick={toggleSignupForm} type="button" className="btn btn-secondary btn-sm">Signup</button>
                    {/* </div> */}
                </div>
            </nav>
            <Card style={{ display: showLogin ? "" : "none" }}>
                <Card.Content>
                    <Form className="Login-form" style={{ display: showLogin ? "" : "none" }}>
                        <Form.Field required>
                            <label>Username</label>
                            <input placeholder='Username' />
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <input placeholder='Password' />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='Remember Me' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Card.Content>
            </Card>

            <Card style={{ display: showSignup ? "" : "none" }}>
                <Card.Content>
                    <Form className="signup-form" style={{ display: showSignup ? "" : "none" }}>
                        <Form.Field required>
                            <label>Avatar</label>
                            <input placeholder='avatar' />
                        </Form.Field>
                        <Form.Field required>
                            <label>Name</label>
                            <input placeholder='Name' />
                        </Form.Field>
                        <Form.Field required>
                            <label>Username</label>
                            <input placeholder='username' />
                        </Form.Field>
                        <Form.Field required>
                            <label>Email</label>
                            <input placeholder='email' />
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <input placeholder='password' />
                        </Form.Field>
                        <Form.Field required>
                            <label>Location</label>
                            <input placeholder='City, State' />
                        </Form.Field>
                        <Form.Field required>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                    {/* <Form className="signup-form" style={{ display: showSignup ? "" : "none" }}>
                        <Form.Group>
                            <Form.Input label='Name' placeholder='Name' />
                            <Form.Input label='Email' placeholder='Email' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Location' placeholder='Location' />
                            <Form.Input label='Username' placeholder='Username' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Avatar' placeholder='Avatar' />
                            <Form.Input label='Password' placeholder='Password' />
                        </Form.Group>
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button type='submit'>Submit</Button>
                    </Form> */}
                </Card.Content>
            </Card>



        </>
    )
}

export default Login;