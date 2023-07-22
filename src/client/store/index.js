import {createStore } from 'redux';
import { defaultState } from './defaultState';

export const store = createStore((state = defaultState, action)=> {

    console.log(action);
    switch(action.type) {
        case "ORDER_DETAIL_CHANGED": {
            return {
                ... state,
                orderDetails: {
                    ... state.orderDetails,
                    [action.property] : action.value
                }
            }
        }
        default:
            return state;
    }
    //console.log(action);
    //return state;


});