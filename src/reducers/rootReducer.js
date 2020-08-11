import{combineReducers} from 'redux'
import loginReducer from './loginReducer';
import loginFormReducer from './loginFormReducer';

const rootReducer = combineReducers({
    login: loginReducer, 
    loginForm: loginFormReducer
})

export default rootReducer