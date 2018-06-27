import React from 'react';
import App from '../components/App';
import { MainContainer } from '../components'
import { LoginContainer } from '../components'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import NoMatch from '../containers/NoMatch/NoMatch';

export default (
    <App>
        <Switch>
            <Route path='/' exact component={MainContainer}/>
            <Route path='/login' exact component={LoginContainer}/>
            <Route component={NoMatch}/>
        </Switch>
    </App>
)
