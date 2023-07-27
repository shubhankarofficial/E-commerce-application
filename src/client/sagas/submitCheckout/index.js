import { takeEvery, select, put } from "redux-saga/effects";

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

        const checkoutResponse  = yield checkoutRequest.json();

        console.log(checkoutResponse);

        yield put ({ type: "SET_CREDIT_CARD_ERRORS", errors: checkoutResponse.errors});

        if(checkoutResponse.success) {

            yield put({type: "CREDIT_CARD_TRANSACTION_SUCCESS"});
        }

    });
}