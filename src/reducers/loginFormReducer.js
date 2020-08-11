const initialState = {username: "", password: ""}

const loginFormReducer = (prevState=initialState, action) => {
    switch (action.type) {
        case "CHANGE LOGIN FORM USERNAME":
            return {...prevState, username: action.payload}
        case "CHANGE LOGIN FORM PASSWORD":
            return {...prevState, password: action.payload}
        default:
            return prevState
    }
    
}

export default loginFormReducer
