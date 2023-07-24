import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { defaultState } from './defaultState';

import { priceCalculation } from '../sagas/priceCalculation'; 
import { cartCreation } from '../sagas/cartCreation';

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
        case "SET_CART_ID": {
            return {
                ...state,
                cartId: action.cartId
            }
        }
        case "MODIFY_CREDIT_CARD_DETAILS" : {
            return {
                ...state,
                creditCardDetails: {
                    ... state.creditCardDetails,
                    [action.property] : action.value
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
sagaMiddleware.run(cartCreation);