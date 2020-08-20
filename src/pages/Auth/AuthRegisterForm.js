import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import Form from 'react-bootstrap/Form'
import { Button} from 'semantic-ui-react'
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
                    dispatch(loginUser(userObj))
                    localStorage.user_id = userObj.id
                    history.push(`/${userObj.username}`)
                })
            }
        })

    }
    
    return (
        <>
            <Form className="auth-form" id="register-form" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="auth-form-group" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="please select a username" value={username}/>
                </Form.Group>
                <Form.Group className="auth-form-group" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={(e) => setFirstName(e.target.value)} name="firstName" type="text" placeholder="please enter your first name" value={firstName} />
                </Form.Group>
                <Form.Group className="auth-form-group" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={(e) => setLastName(e.target.value)} name="lastName" type="text" placeholder="please enter your last name" value={lastName}/>
                </Form.Group>
                <Form.Group className="auth-form-group" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="please select a password" value={password}/>
                </Form.Group>
                <Form.Group className="auth-form-group" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" type="password" placeholder="please confirm your password" value={confirmPassword}/>
                </Form.Group>
                <div className="auth-form-button auth-form-group">
                    <Button  inverted type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default AuthRegisterForm