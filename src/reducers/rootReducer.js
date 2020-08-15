import{combineReducers} from 'redux'
import updateUserReducer from './updateUserReducer';
import loginFormReducer from './loginFormReducer';
import filterReducer from './filterReducer';


const rootReducer = combineReducers({
    updateUser: updateUserReducer, 
    loginForm: loginFormReducer,
    filterReducer: filterReducer
})

export default rootReducer