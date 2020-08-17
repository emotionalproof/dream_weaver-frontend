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
import Button from 'react-bootstrap/Button'




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
        <Container fluid>
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
            <Row>
                <Col>
                    <Button onClick={() => history.push(`/welcome`)}>Cancel</Button>
                </Col>
            </Row>
        </Container>
    )
}



export default AuthMainContainer
