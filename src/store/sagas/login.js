import {call, put, takeEvery } from 'redux-saga/effects';
import {createBrowserHistory} from 'history'
import authhorise from '../../utils/oauth/oauth2';
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '../modules/login';
import { setToken } from '../../utils/oauth/token'






function *auth(){
   try{
       const token = yield(authhorise());
       setToken(token);
       yield put({type: LOGIN_SUCCESS, payload: token});


   } catch (e) {
       yield put({type: LOGIN_FAILURE, payload: e})
   }
}

function *login(){

    yield takeEvery(LOGIN_REQUEST, auth)
}

export default login;