import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/esm/Button'
import Nav from 'react-bootstrap/Nav'
import { useHistory } from "react-router-dom"
import { useDispatch} from 'react-redux'
import { logoutUser } from '../actions'

const NavBar = () => {

    let history = useHistory()
    let dispatch = useDispatch()

    const handleClick = () => {
        localStorage.removeItem("user_id")
        dispatch(logoutUser())
        history.push(`/welcome`)
    }

    return (
        <Navbar  variant="dark" className="custom-navbar">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/navbar_logo.png"
                width="100"
                height="100"
                className="d-inline-block align-top"
            />{' '}
            React Bootstrap
            </Navbar.Brand>
            <Nav>
                <Button variant="link" className="logout" onClick={handleClick}>Logout</Button>
            </Nav>
        </Navbar>
    )
}

export default NavBar