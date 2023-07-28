import { createCustomer } from '../../database/customer';
import { sendOrderNoticeEmail} from '../../utility/communication';
export async function checkoutCreditCard({creditCardDetails, orderDetails}) {
    const { customerId } = await createCustomer({creditCardDetails});

    console.info("TRANSACTION EXECUTED, orderDetails?", orderDetails);

    await sendOrderNoticeEmail({creditCardDetails, orderDetails});

    return {
        status: "ACCEPTED",
        customerId
    }
}