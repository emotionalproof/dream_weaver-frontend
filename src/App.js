import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Switch} from 'react-router-dom';
import DashboardMainContainer from './pages/Dashboard/DashboardMainContainer'
import AuthMainContainer from './pages/Auth/AuthMainContainer';
// import { increment } from './actions/index';
import { DreamIndexMainContainer } from './pages/DreamIndex/DreamIndexMainContainer';
import { DreamShowMainContainer } from './pages/DreamShow/DreamShowMainContainer';
import WelcomeMainContainer from './pages/Welcome/WelcomeMainContainer';



// const counter = useSelector(state => state.counter)
// const dispatch = useDispatch()
// {/* <button onClick={() => dispatch(increment)}> */}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/dreams/:id' render={() => <DreamShowMainContainer />} />  
        <Route exact path='/welcome' render={(routerProps) =>  <WelcomeMainContainer  {...routerProps}/>} />
        <Route exact path='/login' render={(routerProps) => <AuthMainContainer  {...routerProps}/>} />
        <Route exact path='/:username' render={(routerProps) => <DashboardMainContainer  {...routerProps}/>  } />
        <Route exact path='/dreams' render={(routerProps) => <DreamIndexMainContainer  {...routerProps}/>  } />
      </Switch>
    </div>
  );
}

export default App;
