import React from 'react';
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
     Route,
    Switch,
    Redirect
} from 'react-router-dom';
import App from './containers/App/App'
import Login from './containers/Login/Login'


const MapPropsToState= ({login})=>login;

const PrivateRoute = ({ component, auth, ...rest }) => {
        return (<Route {...rest} render={props => (
        auth ? (
                React.createElement(component, props)
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}/>
            )
    )}/>)
};

const LoginRoute = ({ component, auth, ...rest }) => {
    return (<Route {...rest} render={props => (
        !auth ? (
                React.createElement(component, props)
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }}/>
            )
    )}/>)
};





const routes =  (props) => {
console.log(props)

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path={'/'} auth={props.isLoggedIn} component={App}/>
                <LoginRoute  path={'/login'} auth={props.isLoggedIn} component={Login}/>
                <Route render={() => (<h1>Page not found</h1>)}/>
            </Switch>
        </Router>)
}

export default connect (MapPropsToState)(routes)