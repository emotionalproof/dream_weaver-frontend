const initialState = {symbol: null}

const symbolReducer = (prevState=initialState, action) => {
    switch (action.type) {
        case "NEW SYMBOL":
            return {symbol: action.payload}
        default:
            return prevState
    }
}

export default symbolReducer