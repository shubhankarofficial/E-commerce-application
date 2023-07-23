import { takeEvery, put, select } from 'redux-saga/effects';

export const priceCalculation = function*(){
    yield takeEvery(["ORDER_DETAIL_CHANGED", "INIT"], function*(){

        const{ orderDetails } = yield select();
        console.log("Saga running!", orderDetails);

        const response = yield fetch("http://localhost:7777/price",{
            method: "POST",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(orderDetails)
        })
        const { price } = yield response.json();

        console.log("PRICE RECIEVED", price);

        yield put({type: "UPDATE_ORDER_PRICING", price});
    })
}