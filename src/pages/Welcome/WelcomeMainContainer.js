import React from "react";
import VideoPlayer from './VideoPlayer';
import { useHistory } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const playerOptions = {
    sources: [
        {
            src: "media/welcome_video.mp4"
        }
    ]
};

const WelcomeMainContainer = () => {
    let history = useHistory()
    
    return (
        <Container onClick={() => history.push('/login')} fluid className="static welcome-video">
            <Row>
                <Col>
                    <h1 className="welcome-title">DreamWeaver</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <VideoPlayer className="video-player-component" playerOptions={playerOptions} />
                </Col>
            </Row>
        </Container>
    )
}

export default WelcomeMainContainer