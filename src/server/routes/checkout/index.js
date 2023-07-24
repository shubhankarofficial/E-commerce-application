import { Router} from 'express';

export const Checkout = Router();

Checkout.post('/credit',async({body},res) => {


    console.log("REQUEST BODY?", body);
    console.log("ACCESSING CREDIT ROUTE");
    res.status(501).json({message: "NOT_IMPLEMENTED"});
})