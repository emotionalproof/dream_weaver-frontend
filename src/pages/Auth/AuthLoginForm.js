import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Form from 'react-bootstrap/Form'
import { Button} from 'semantic-ui-react'
import { loginUser } from '../../actions'
import { checkLogin } from '../../helpers/requests'
import { useHistory } from "react-router-dom"



const AuthLoginForm = () => {

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch()
    let history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (username === "") {
            alert("Please enter your username")
        } else if (password === "") {
            alert("Please enter your password")
        } else {
            checkLogin(username).then(data => checkCredentials(data))
        }
    }

    const checkCredentials = data => {
        if (!data) {
            alert("Username not found. Please try again.")
        } else if (password !== data.password) {
            alert("Incorrect password. Please try again.")
        } else {
            dispatch(loginUser(data))
            localStorage.user_id = data.id
            history.push(`/${data.username}`)
        }
    }


    return (
        <>
            <Form className="auth-form" id="login-form" onSubmit={(e) => handleSubmit(e, username, password)}>
                <Form.Group className="auth-form-group" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="please enter your username" value={username}/>
                </Form.Group>

                <Form.Group className="auth-form-group" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="please enter your password" value={password}/>
                </Form.Group>
                <div className="auth-form-button auth-form-group">
                    <Button   inverted type="submit">
                        Submit
                    </Button>
                </div>
                
            </Form>
        </>
    )
}

export default AuthLoginForm
