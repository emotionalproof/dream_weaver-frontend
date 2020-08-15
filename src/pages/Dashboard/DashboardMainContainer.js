import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../../components/NavBar';
import {useParams} from 'react-router-dom'
import DashboardLeftContainer from './DashboardLeftContainer';
import DashboardRightContainer from './DashboardRightContainer';



// to save user_id through a refresh
// When you are setting start for the current user
// localStorage.user_id = user.id
// to call it, localStorage.user_id
// to log out localStorage.removeItem('user_id')
// to run the fetch
// componentDidMount(){
//     const user_id = localStorage.user_id
//     if (user_id) {
//         fetch('website/api/v1/)
//         //get user info
//     }
// }


const DashboardMainContainer = () => {
    let { username } = useParams()
    console.log(username)
    return (
        <>
            <NavBar />
            <Container fluid id="dashboard-main-container">
                <Row>
                    <Col id="dashboard-title">
                        <h1>DashboardMainContainer</h1> 
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={3}><DashboardLeftContainer /></Col>
                    <Col md={1}></Col>
                    <Col md={8}><DashboardRightContainer /></Col>
                </Row>
                
            </Container>
        </>
    )
}

export default DashboardMainContainer
