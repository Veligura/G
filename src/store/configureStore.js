import {createStore, applyMiddleware} from 'redux';
import rootReducer from './modules/';




function* rootSaga() {

  
}




export default function configureStore(preloadedState) {


    const store = createStore(rootReducer);
    


    return store
}

