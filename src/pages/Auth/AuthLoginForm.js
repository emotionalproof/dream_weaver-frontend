import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { login } from '../../actions'
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
            dispatch(login(data))
            history.push(`/${data.id}`)
        }
    }


    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={(e) => handleSubmit(e, username, password)}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="please enter your username" value={username}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="please enter your password" value={password}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default AuthLoginForm
