export const Validation = {

    EmptyField() {

        return function (str) {

            if (!str) {
                return {

                    type: "EMPTY_FIELD",
                    description: "Field is empty"
                }
            }
        }
    },

    NonInteger() {

        return function(str) {
            if (!/^\d+$/.test(str)) {
                return {

                    type: "NON_INTEGER",
                    description: "Field must be an integer"
                }
                

            }
        }
    },
    InvalidLength(min, max) {

        return function(str= "") {
            const withoutSpaces = str.toString().replace(/\s/g, '');

            if (withoutSpaces.length< min ) {

                return {
                    type: "LENGHTH_INVALID",
                    description: "Field is too short"
                }
            }
            if (withoutSpaces.length> max ) {

                return {
                    type: "LENGHTH_INVALID",
                    description: "Field is too long"
                }
            }
        }

    }
}

const ErrorCompiler = function(specs){

    return function(str) {

        let errors = [];
        for (let spec of specs) {

            let res= spec(str);
            if (res) {

                errors= [... errors, res]

            }
        }
        return errors;
    }
}

const CreditCardSchema = {

    nameOnCard: ErrorCompiler([Validation.EmptyField()]),
    address: ErrorCompiler([Validation.EmptyField()]),
    
    cardNumber: ErrorCompiler([Validation.NonInteger(), Validation.InvalidLength(16,16)]),
    securityField: ErrorCompiler([Validation.NonInteger(), Validation.InvalidLength(3,3)])


}

export function validateCreditCard (creditCardDetails) {

    let errors = {};
    let countErrors = 0;

    for (let field in CreditCardSchema) {

        let value = creditCardDetails[field];
        let _errors = CreditCardSchema[field](value);
        //if (_error) {
            //countErrors += 1;
       // }
        countErrors += _errors.length;
        errors[field] = _errors;

    }
    return {
        errors,
        valid: countErrors === 0
    }
}