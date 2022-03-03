import {createStore} from 'redux';
import { combine } from './Reducers/Indexreducer';

export const Store = createStore(combine,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());