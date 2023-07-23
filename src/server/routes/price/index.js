import { Router} from 'express';

export const Price= Router();

Price.post("/",async ({body},res) => {
    const {
        size,
        flavor,
        ornament,
        message= ""

    } = body;

    let price = 49.99;

    switch(size) {
        case "SMALL": {
            price+= .25 * message.length;
            break;
        }
        case "MEDIUM": {
            price+= 9.99;
            price+= .25 * message.length;
            break;
        }
        case "LARGE": {

            price+= 14.99;
            price+= .60 * message.length;
            break;
        }

    }
    switch(ornament) {
        case "RACECAR": {
            price+= 15.00;
            break;
        }
        case "BARBIE": {
            price+= 20.00;
            break;
        }
    }



    console.log("Got values...", size, flavor, ornament, message);

    res.json({price:+price.toFixed(2)});
    
}) 