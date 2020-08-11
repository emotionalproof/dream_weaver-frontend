const initialState = {user: null, loginCredentials: null}

const loginReducer = (prevState=initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...prevState, user: action.payload.user}
        case 'LOGOUT':
            return prevState
        default:
            return prevState
    }
}

export default loginReducer