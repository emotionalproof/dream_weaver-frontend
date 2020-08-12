const initialState = {user: null, loginCredentials: null}

const updateUserReducer = (prevState=initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...prevState, user: action.payload.user}
        case 'LOGOUT':
            return prevState
        case 'NEW ENTRY':
            return {
                ...prevState, 
                user: {
                    ...prevState.user, 
                    entries: [
                        ...prevState.user.entries, 
                        action.payload.entry
                    ]}}
        default:
            return prevState
    }
}

export default updateUserReducer