import { createCustomer } from '../../database/customer';
export async function checkoutCreditCard({creditCardDetails, orderDetails}) {
    const { customerId } = await createCustomer({creditCardDetails});

    console.info("TRANSACTION EXECUTED");

    return {
        status: "ACCEPTED",
        customerId
    }
}