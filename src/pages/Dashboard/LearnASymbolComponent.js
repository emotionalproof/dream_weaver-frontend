import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, Divider, Transition} from 'semantic-ui-react'
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
        <>
        <div id="learn-dream-symbol-image-div">
            <img src="/media/dashboard-learn-dream-symbols.png" alt="Learn Dream Symbols" id="learn-dream-symbols-image" />
        </div>
        <Container id="learn-symbol-container">
            {/* <Row>
                <Col>
                    <div>
                        <img src="/media/dashboard-learn-dream-symbols.png" alt="Learn Dream Symbols" id="learn-dream-symbols-image" />
                    </div>
                </Col>
                
            </Row> */}
            <Row>
                <Col id="learn-name">{dreamSymbol.name}</Col>
            </Row>
            <Row>
                <Col id="learn-meaning">{dreamSymbol.meaning}</Col>
            </Row>
            <Row>
                <Col>
                    <Button id="learn-button" inverted onClick={() => nextSymbol()}>Next Symbol</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default LearnASymbolComponent
