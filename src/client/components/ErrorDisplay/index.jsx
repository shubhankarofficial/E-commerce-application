import React from 'react';

export const ErrorDisplay = ({formErrors = []}) => (

    <div>
        {console.log("Form errors?", formErrors)}
        { formErrors.map((error, i) => (
            <div key = {i} style={ {color: "red"}}>
                {error.description}

            </div>

        ))}
    </div>
)