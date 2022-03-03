import { ProductData,ProductSelect } from "./Reducer";
import {combineReducers} from 'redux';

export const combine = combineReducers({
    allProducts:ProductData,
    productss:ProductSelect,
})