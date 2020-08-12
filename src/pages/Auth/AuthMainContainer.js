import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthLoginForm from './AuthLoginForm';
import AuthRegisterForm from './AuthRegisterForm';
import { getUser } from '../../helpers/requests';
import {useDispatch} from 'react-redux'
import { loginUser } from '../../actions'
import { useHistory } from "react-router-dom"



const AuthMainContainer = () => {

    useEffect(() => {
        localStorage.user_id && fetchUser(localStorage.user_id)
    })

    let dispatch = useDispatch()
    let history = useHistory()
    
    const fetchUser = id => {
        getUser(id).then(userObj => {
            dispatch(loginUser(userObj))
            history.push(`/${userObj.username}`)
        })
    }


    return (
        <Container>
            <Row className="auth-title">
                <Col>Register or Login Below</Col>
            </Row>
            <Row>
                <Col md={5}>
                    <AuthRegisterForm />
                </Col>
                <Col></Col>
                <Col md={5}>
                    <AuthLoginForm />
                </Col>
            </Row>
        </Container>
    )
}



export default AuthMainContainer
