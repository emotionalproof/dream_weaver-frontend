import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../../components/NavBar';
import DashboardLeftContainer from './DashboardLeftContainer';
import DashboardRightContainer from './DashboardRightContainer';
import moment from 'moment'
import MyPlanet from '../../components/MyPlanet';


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
    return (
        <>
            
            <Container fluid id="dashboard-main-container">
                <Row id='nav-row'>
                    <Col id='nav-col'>
                       <MyPlanet /> 
                    </Col>
                    
                </Row>
                <Row>
                    <Col id="dashboard-title">
                        <img id="dashboard-title-image" src="/media/dashboard-title.png" alt="welcome dreamer" /> 
                    </Col>
                    
                </Row>
                <Row id="dashboard-content-row">
                    <Col md={4}><DashboardLeftContainer /></Col>
                    <Col md={1}></Col>
                    <Col md={7}><DashboardRightContainer /></Col>
                </Row>
                
            </Container>
        </>
    )
}

export default DashboardMainContainer
