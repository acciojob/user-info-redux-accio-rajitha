
import { createStore } from 'redux';
import rootReducer from './userReducer';

const Store = createStore(rootReducer);
export default Store;
/*
import { createStore } from 'redux';
import userReducer from './userReducer';

const Store = createStore(userReducer);

export default Store;
*/
