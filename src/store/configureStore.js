import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();


export default function configureStore(preloadedState) {


    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);


    return store
}

