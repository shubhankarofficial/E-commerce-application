import { v1 } from 'uuid';
import { getCollection } from '../utility';
export async function createCustomer({creditCardDetails}) {

    const customerId = v1();
    const collection = await getCollection("customers", customerId);

    await collection.insertOne({
        type: "SET_CUSTOMER_DETAILS",
        date: new Date(),
        meta: {

            creditCardDetails

        }
    })
    return {
        customerId
    }
}