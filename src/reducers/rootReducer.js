import{combineReducers} from 'redux'
import updateUserReducer from './updateUserReducer';
import loginFormReducer from './loginFormReducer';

const rootReducer = combineReducers({
    updateUser: updateUserReducer, 
    loginForm: loginFormReducer
})

export default rootReducer