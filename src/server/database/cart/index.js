import {v1} from 'uuid';
import { getCollection } from '../utility';
export async function CreateCart() {
    const cartId = v1();
    const collection = await getCollection("carts", cartId);
    await collection.insertOne({
        type: "CREATE_CART",
        date: new Date(),
        meta: {
            cartId
        }
    });
    console.info("Created cart with ID",cartId);
    return { cartId };



}