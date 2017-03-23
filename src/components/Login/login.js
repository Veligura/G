import React from 'react';
import {Component} from 'react';
import authorize from '../../helpers/oauth/oauth2';
import './login.css'
import logo from './github-social-logo.svg';



export default class Login extends Component {
    login = () => {
        authorize().then((result)=>console.log(result)).catch((result)=>console.log(result))
    }


    render() {


        return ( <div className="conteiner">
                <div className="login">
                    <h1>Gitter client</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <button className="btn deep-orange darken-3" onClick={this.login}>Login</button>
                </div>


            </div>





        )
    }
}

