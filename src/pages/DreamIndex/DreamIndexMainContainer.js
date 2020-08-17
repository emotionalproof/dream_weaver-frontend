import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux'
import NavBar from '../../components/NavBar';
import Calendar from './Calendar';
import DreamEntryContainer from './DreamEntryContainer';
import DreamIndexFilterForm from './DreamIndexFilterForm'
import moment from 'moment'



export const DreamIndexMainContainer = () => {
    const updateUserState = useSelector(state => state.updateUser)
    let user = (!!updateUserState.user && updateUserState.user)

   
    let [entries, setEntries] = useState(user.entries)
    let [newDate, setNewDate] = useState("")
    let [searchText, setSearchText] = useState("")
    

    // useEffect(() => {
    //     let entryArray = [...entries]
    //     setEntries(entryArray.filter(entry => entry.date === newDate))
    //     // setEntries(entryArray)
    // },[entries, newDate])

    
    const changeDate = date => {
        setNewDate(date)
    }

    const handleSearch = text => {
        setSearchText(text)
    }


    const entryArray = () => {
        let entryArray = [...entries].sort((a, b) => moment(b.date, "dddd, MMMM Do YYYY").unix() - moment(a.date, "dddd, MMMM Do YYYY").unix())
        entryArray = entryArray.filter(entry => entry.date.includes(newDate))
        let entryArrayWithSearch = [...entryArray]
        entryArrayWithSearch = entryArrayWithSearch.filter(entry => entry.description.toLowerCase().includes(searchText.toLowerCase()))
        return entryArrayWithSearch
    }

    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Explore Your Dreams</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DreamIndexFilterForm searchText={searchText} handleSearch={handleSearch}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}><Calendar changeDate={changeDate}/></Col>
                    <Col md={1}></Col>
                    <Col md={8}><DreamEntryContainer entries={entryArray()}/></Col>
                </Row>
            </Container>
            
        </>
    )
}
