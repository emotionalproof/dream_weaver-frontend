import{combineReducers} from 'redux'
import updateUserReducer from './updateUserReducer';
import loginFormReducer from './loginFormReducer';
import filterReducer from './filterReducer';
import symbolReducer from './symbolReducer';


const rootReducer = combineReducers({
    updateUser: updateUserReducer, 
    loginForm: loginFormReducer,
    filterReducer: filterReducer,
    symbolReducer: symbolReducer
})

export default rootReducer