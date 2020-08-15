import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/esm/Button'
import Nav from 'react-bootstrap/Nav'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../actions'

const NavBar = () => {
    let history = useHistory()
    let dispatch = useDispatch()

    const updateUser = useSelector(state => state.updateUser)


    const handleLogout = () => {
        localStorage.removeItem("user_id")
        dispatch(logoutUser())
        history.push(`/welcome`)
    }

    const goToDreamIndex = () => {
        history.push(`/dreams`)
    }

    const goToHome = () => {
        !updateUser.user ? history.push(`/welcome`) : history.push(`/${updateUser.user.username}`) 
    }

    return (
        <Navbar  variant="dark" className="custom-navbar">
            <Navbar.Brand >
            <img
                alt=""
                src="/navbar_logo.png"
                width="100"
                height="100"
                className="d-inline-block align-top"
                onClick={goToHome}
            />{' '}
            
            </Navbar.Brand>
            <Nav>
                <Button variant="link" id="view-dream-index-button" onClick={goToDreamIndex}>View All Dreams</Button>
            </Nav>
            <Nav>
                <Button variant="link" className="logout" onClick={handleLogout}>Logout</Button>
            </Nav>
        </Navbar>
    )
}

export default NavBar