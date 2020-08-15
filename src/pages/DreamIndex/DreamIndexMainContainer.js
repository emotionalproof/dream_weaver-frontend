import React,{useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux'
import NavBar from '../../components/NavBar';
import Calendar from './Calendar';
import DreamEntryContainer from './DreamEntryContainer';
import DreamIndexFilterForm from './DreamIndexFilterForm'



export const DreamIndexMainContainer = () => {
    const updateUserState = useSelector(state => state.updateUser)
    let user = (!!updateUserState.user && updateUserState.user)

   
    let [entries, setEntries] = useState(user.entries)
  
    useEffect(() => {
        setEntries(user.entries)
    },[user.entries])

    
    console.log(entries)
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col>
                        <h1>DreamIndex</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DreamIndexFilterForm />
                    </Col>
                </Row>
                <Row>
                    <Col md={3}><Calendar /></Col>
                    <Col md={1}></Col>
                    <Col md={8}><DreamEntryContainer entries={entries}/></Col>
                </Row>
            </Container>
            
        </>
    )
}
