import React,{useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import { Button, Divider, Transition} from 'semantic-ui-react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useHistory } from "react-router-dom"
import moment from 'moment';

const RecentEntriesCard = props => {
    const [viewDescription, setViewDescription] = useState(false);
    let history = useHistory()

    // const viewDream = () => {
    //     history.push(`/dreams/${props.id}`)
    // }

    // const titleizeTitle = title => {
    //    return title.split(" ").forEach(word => {
    //         word.charAt(0) = word.charAt(0).toUpperCase

    //     }).join(" ")
    // }

    // const titleCase = str => { 
    //     return str.replace(/\w\S/g, function(t) { return t.toUpperCase() }); 
    // } 

    const toggleViewDescription = () => {
        setViewDescription(!viewDescription)
    }


    return (
        <>
        <Container id="recent-entry-card">
            <Row>
                <Col md={9}>
                    <h5><span id="recent-entry-title">{props.titleized_title}</span>, <span id="recent-entry-date">dreamt on {props.date}</span></h5>
                </Col>
                <Col md={3}>
                    <Button
                        className="custom-button"
                        inverted
                        content={viewDescription ? 'Hide Description' : 'Show Description'}
                        onClick={toggleViewDescription}
                    />
                    {/* <Button onClick={() => viewDream()}>
                        More Details
                    </Button> */}
                </Col>
           
            </Row>
            <Divider hidden />
            <Transition visible={viewDescription} animation='scale' duration={500}>
            <Row>
                <Col>
                        <div id="example-collapse-text">
                            {props.description}
                        </div>
                </Col>
            </Row>
           </Transition>
            
        </Container>
        </>
    );
}

export default RecentEntriesCard
