import React from "react";
import VideoPlayer from './VideoPlayer';
import { useHistory } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const playerOptions = {
    autoplay: true,
    sources: [
        {
            src: "media/welcome_video.mp4"
        }
    ]
};

const WelcomeMainContainer = () => {
    let history = useHistory()
    
    return (
        <>
        <video autoPlay id="myVideo">
            <source src="/media/Sparkle.mp4" type="video/mp4"></source>
        </video>
        <Container onClick={() => history.push('/login')} fluid id="welcome-container" className="static welcome-video">
        
            {/* <Row>
                <Col>
                    <h1 className="welcome-title">DreamWeaver</h1>
                </Col>
            </Row> */}
            <Row id="video-player-row">
                <Col className="welcome-title-outer-column" md={4}>
                    <Container id="welcome-title-container">
                        <Row>
                            <Col className="welcome-title">
                               {/* DreamWeaver  */}
                            </Col>
                        </Row>
                    </Container>
                    
                </Col>
                <Col id="video-player-column" md={8}>
                    {/* <VideoPlayer className="video-player-component" playerOptions={playerOptions} /> */}
                </Col>
                {/* <img id="bubble-image" src='/media/dream-bubbles.png' /> */}
                
            </Row>
            <Row>
                {/* <img id="bubble-image" src='/media/dream-bubbles.png' /> */}
                {/* <img id="maizey" src='/media/maizey.png' /> */}
                
                <Col md={1} id="bubble-one"></Col>
                <Col md={2} id="bubble-two"></Col>
                <Col id="bubble-three" md={3}>
                    
                </Col>
                <Col md={6}></Col>
            </Row>
            {/* <Row> */}
                {/* <img id="maizey" src='/media/maizey.png' /> */}
            {/* </Row> */}
        </Container>
        </>
    )
}

export default WelcomeMainContainer