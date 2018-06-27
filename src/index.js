import React from 'react';
import routes from './routes/routes';
import reactDOM from 'react-dom';
import { getStore } from './getStore';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = getStore();
const history = createBrowserHistory();

reactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <ConnectedRouter history={history} children={routes}/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('wrapper')
);
