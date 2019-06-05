import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Welcome from './components/Welcome/Welcome';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';

const Routes =()=>(
    <BrowserRouter history={createBrowserHistory()}>
    <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
        <Route path="*" component={Notfound} /> 
        </Switch>
    </BrowserRouter>
)

export default Routes;