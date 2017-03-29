import {fork} from 'redux-saga/effects'
import login from './login';
import rooms from './rooms';

function* rootSaga() {

    yield  [

        fork(login),
        fork(rooms)
    ]

}
export default rootSaga;