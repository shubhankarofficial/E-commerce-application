import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { defaultState } from './defaultState';

import { priceCalculation } from '../sagas/priceCalculation'; 

const sagaMiddleware = createSagaMiddleware();

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
        case "UPDATE_ORDER_PRICING": {
            return {
                ...state,
                orderPricing: {
                    fetchStatus: "FETCHED",
                    totalPrice: action.price
                }
            }
        }
        default:
            return state;
    }
    //console.log(action);
    //return state;


},
applyMiddleware(

    sagaMiddleware

));

sagaMiddleware.run(priceCalculation);