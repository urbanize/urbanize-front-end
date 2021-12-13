import { userReducer } from './user/userReducer';
import {createStore} from 'redux';


const store = createStore(userReducer);

export default store;