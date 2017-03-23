import React from 'react';
import ReactDOM from 'react-dom';
import{Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history'
import routes from './routes';
import configureStore from './store/configureStore';
import '../node_modules/materialize-css/dist/css/materialize.css';






const store = configureStore();
console.log(routes)


ReactDOM.render((

        <Provider store={store}>
            <Router>



            </Router>
        </Provider>),
    document.getElementById('root'));





