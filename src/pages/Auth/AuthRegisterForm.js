import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { checkLogin, postUser } from '../../helpers/requests'
import { useHistory } from "react-router-dom"
import { loginUser } from '../../actions'

const AuthRegisterForm = () => {

    let [username, setUsername] = useState("")
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    let user = {username: username, first_name: firstName, last_name: lastName, password: password, confirm_password: confirmPassword}
    let history = useHistory()
    let dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        checkLogin(username)
        .then(data => {
            if (!!data){
                alert("Sorry, that user has already been taken. If this is your username, please use the login form on the right. Otherwise select a new username and try again.")
            }else {
                postUser(user).then(userObj => {
                    console.log(userObj)
                    dispatch(loginUser(userObj))
                    localStorage.user_id = userObj.id
                    history.push(`/${userObj.username}`)
                })
            }
        })

    }
    
    return (
        <>
            <h3>Register</h3>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="please enter your username" value={username}/>
                </Form.Group>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={(e) => setFirstName(e.target.value)} name="firstName" type="text" placeholder="please enter your first name" value={firstName} />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={(e) => setLastName(e.target.value)} name="lastName" type="text" placeholder="please enter your last name" value={lastName}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="please enter a password" value={password}/>
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" type="password" placeholder="please confirm your password" value={confirmPassword}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default AuthRegisterForm