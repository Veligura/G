import React from 'react';
import ReactDOM from 'react-dom';
import{Provider} from 'react-redux';
import Routes from './routes';
import configureStore from './store/configureStore';
import '../node_modules/materialize-css/dist/css/materialize.css';






const store = configureStore();



ReactDOM.render((

        <Provider store={store}>
           <Routes auth ={ store.getState().login.token }></Routes>
        </Provider>),
    document.getElementById('root'));





