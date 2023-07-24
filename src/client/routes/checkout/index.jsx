import React from 'react';

import { connect } from 'react-redux';

const mstp = (state) => ({
    totalPrice: state.orderPricing.totalPrice,
    ... state.orderDetails,
    ... state.creditCardDetails
});

const mdtp = (dispatch) => ({
    handleCreditCardDetailsChange(property, value) {
        dispatch({type: "MODIFY_CREDIT_CARD_DETAILS", property, value})
    },
    handleSubmitCheckout(e) {
        e.preventDefault();
        dispatch({type: "SUBMIT_CHECKOUT"});
        console.log("Time to checkout!");

    }
})

export const WrapperCheckoutRoute = connect(mstp, mdtp)(({
    totalPrice,
    size,
    flavor,
    ornament,
    nameOnCard,
    address,
    cardNumber,
    securityField,
    handleCreditCardDetailsChange,
    handleSubmitCheckout

})=>(
    <div>

        <h2>
            Your Order: ${totalPrice}
        </h2>
        <table>
            <tbody>
                <tr>
                    <th>
                        Size
                        
                    </th>
                    <td>
                        {size}
                    </td>
                </tr>
                <tr>
                    <th>
                        Flavor
                        
                    </th>
                    <td>
                        {flavor}
                    </td>
                </tr>
                <tr>
                    <th>
                        Ornament
                        
                    </th>
                    <td>
                        {ornament}
                    </td>
                </tr>
            </tbody>
        </table>

        <div>
            <h2>
                Checkout
            </h2>
            <form onSubmit={(e)=>handleSubmitCheckout(e)} >
                <h3>
                     Credit Card Details
                </h3>
                <div>
                    <label htmlFor="">
                        Name on Card
                    </label>
                    <input type="text" value={nameOnCard} onChange={(e) => handleCreditCardDetailsChange("nameOnCard", e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">
                        Address
                    </label>
                    <input type="text" value={address} onChange={(e) => handleCreditCardDetailsChange("address", e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">
                        Card Number
                    </label>
                    <input type="text" value={cardNumber} onChange={(e) => handleCreditCardDetailsChange("cardNumber", e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">
                        Security Field
                    </label>
                    <input type="text" value={securityField} onChange={(e) => handleCreditCardDetailsChange("securityField", e.target.value)}/>
                </div>
                <button type="submit">Checkout</button>
            </form>
        </div>

    </div>
))