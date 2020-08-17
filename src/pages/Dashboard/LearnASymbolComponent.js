import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getRandomSymbol } from '../../helpers/requests';
import {useDispatch, useSelector} from 'react-redux'
import { newSymbol } from '../../actions'



const LearnASymbolComponent = () => {
    let dispatch = useDispatch()
    let symbolReducer = useSelector(state => state.symbolReducer)
    let [dreamSymbol, setDreamSymbol] = useState({})
    

    useEffect(() => {
        symbolReducer.symbol && setDreamSymbol(symbolReducer.symbol)
    }, [])
    
    const nextSymbol = () => {
        getRandomSymbol().then(symbol => {
            console.log(symbol)
            dispatch(newSymbol(symbol))
            setDreamSymbol(symbol)
        })
    }

    useEffect(() => {
        nextSymbol()
    },[])

    // const counter = useSelector(state => state.counter)
    console.log(dreamSymbol)
    return (
        <Container id="learn-symbol-container">
            <Row>
                <Col>Learn a Dream Symbol</Col>
            </Row>
            <Row>
                <Col>{dreamSymbol.name}</Col>
            </Row>
            <Row>
                <Col>{dreamSymbol.meaning}</Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={() => nextSymbol()}>Next Symbol</button>
                </Col>
            </Row>
        </Container>
    )
}

export default LearnASymbolComponent
