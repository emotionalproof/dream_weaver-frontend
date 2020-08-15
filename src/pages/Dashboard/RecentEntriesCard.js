import React,{useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useHistory } from "react-router-dom"
import moment from 'moment';

const RecentEntriesCard = props => {
    const [open, setOpen] = useState(false);
    let history = useHistory()

    const viewDream = () => {
        history.push(`/dreams/${props.id}`)
    }

    // const titleizeTitle = title => {
    //    return title.split(" ").forEach(word => {
    //         word.charAt(0) = word.charAt(0).toUpperCase

    //     }).join(" ")
    // }

    // const titleCase = str => { 
    //     return str.replace(/\w\S/g, function(t) { return t.toUpperCase() }); 
    // } 
    console.log(moment(props.date).format("dddd, MMMM Do YYYY"))
    return (
        <Container id="recent-entry-card">
            <Row>
                <Col md={9}>
                    <h5><span id="recent-entry-title">{props.titleized_title}</span>, <span id="recent-entry-date">dreamt on {moment(props.date).format("dddd, MMMM Do YYYY")}</span></h5>
                </Col>
                <Col md={3}>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        id="recent-entry-card-view-description-button"
                    >
                        Description
                    </Button>
                    {/* <Button onClick={() => viewDream()}>
                        More Details
                    </Button> */}
                </Col>
           
            </Row>
            <Row>
                <Col>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            {props.description}
                        </div>
                    </Collapse>
                </Col>
            </Row>
           
            
        </Container>
    );
}

export default RecentEntriesCard
