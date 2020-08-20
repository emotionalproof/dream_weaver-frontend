import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthLoginForm from './AuthLoginForm';
import AuthRegisterForm from './AuthRegisterForm';
import { getUser, getRandomSymbol } from '../../helpers/requests';
import {useDispatch} from 'react-redux'
import { loginUser, newSymbol } from '../../actions'
import { useHistory } from "react-router-dom"
import { Button} from 'semantic-ui-react'




const AuthMainContainer = () => {

    useEffect(() => {
        localStorage.user_id && fetchUser(localStorage.user_id)
    })

    let [symbol, setSymbol] = useState({})

    useEffect(() => {
        fetchSymbol()
    }, [symbol])

    const fetchSymbol = () => {
        getRandomSymbol().then(symbol => dispatch(newSymbol(symbol)))
    }
    let dispatch = useDispatch()
    let history = useHistory()
    
    const fetchUser = id => {
        getUser(id).then(userObj => {
            dispatch(loginUser(userObj))
            history.push(`/${userObj.username}`)
        })
    }


    return (
        <Container fluid id="auth-main-container">
            <Row className="auth-title">
                <Col></Col>
            </Row>
            <Row id='auth-form-row'>
                <Col id="register-column" className="auth-form-column" md={5}>
                    <AuthRegisterForm />
                </Col>
                <Col md={1}></Col>
                <Col id="login-column" className="auth-form-column" md={5}>
                    <AuthLoginForm />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button inverted onClick={() => history.push(`/welcome`)}>Take me back to the music!</Button>
                </Col>
            </Row>
        </Container>
    )
}



export default AuthMainContainer
