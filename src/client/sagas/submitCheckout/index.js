import { takeEvery, select } from "redux-saga/effects";

export function* submitCheckout() {

    yield takeEvery("SUBMIT_CHECKOUT", function*(){

        const {cartId, orderDetails, creditCardDetails }= yield select();

        const checkoutRequest = yield fetch("http://localhost:7777/checkout/credit", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ cartId, creditCardDetails, orderDetails})
        })

        const { message } = yield checkoutRequest.json();

        console.log(message);

    });
}