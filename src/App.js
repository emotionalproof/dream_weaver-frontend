import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Switch} from 'react-router-dom';
import DashboardMainContainer from './pages/Dashboard/DashboardMainContainer'
import AuthMainContainer from './pages/Auth/AuthMainContainer';
import { DreamIndexMainContainer } from './pages/DreamIndex/DreamIndexMainContainer';
import { DreamShowMainContainer } from './pages/DreamShow/DreamShowMainContainer';
import WelcomeMainContainer from './pages/Welcome/WelcomeMainContainer';
import { useHistory } from "react-router-dom"



// const counter = useSelector(state => state.counter)
// const dispatch = useDispatch()
// {/* <button onClick={() => dispatch(increment)}> */}

function App() {
  let history = useHistory()
  return (
    <div className="App">
      <Switch>
        <Route exact path='/dreams' render={(routerProps) => <DreamIndexMainContainer  {...routerProps}/>  } />
        <Route exact path='/dreams/:id' render={() => <DreamShowMainContainer />} />  
        <Route exact path='/welcome' render={(routerProps) =>  <WelcomeMainContainer  {...routerProps}/>} />
        <Route exact path='/login' render={(routerProps) => <AuthMainContainer  {...routerProps}/>} />
        <Route exact path='/' render={() => history.push(`/welcome`)} />
        <Route exact path='/:username' render={(routerProps) => <DashboardMainContainer  {...routerProps}/>  } />
        
      </Switch>
    </div>
  );
}

export default App;
