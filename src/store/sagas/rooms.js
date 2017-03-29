import {put, takeEvery, select } from 'redux-saga/effects';
import {GET_USER_ROOMS, getUserRoomsReceived} from '../modules/rooms';
import Api from '../../utils/api';

const getToken =(state)=>state.login.token

function *getRooms(state){


    try{
    const token = yield select(getToken)
    const list = yield Api.currentUserRooms(token)
    yield put(getUserRoomsReceived(list))

    } catch (e) {

    }
}

function *rooms(){

    yield takeEvery( GET_USER_ROOMS, getRooms )
}

export default rooms;