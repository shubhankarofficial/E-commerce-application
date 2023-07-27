import { Router} from 'express';

import { validateCreditCard } from '../../utility/validation';

export const Checkout = Router();

Checkout.post('/credit',async({body},res) => {


    console.log("REQUEST BODY?", body);
    console.log("ACCESSING CREDIT ROUTE");
    let { creditCardDetails } = body;

    console.log(creditCardDetails);
    const { errors, valid } = validateCreditCard(creditCardDetails);

    console.log(errors, valid);

    if(valid) {


        res.status(501).json({message: "NOT_IMPLEMENTED"});

    }else {

        return res.json({

            status: 400,
            description: "Fields did not Validate",
            errorCode: "FIELD_VALIDATION",
            errors,
            success: false
        })
    }
    
})