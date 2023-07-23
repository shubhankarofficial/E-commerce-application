import React from 'react';
import { connect } from 'react-redux';

import {
    
    //Link
    useHistory

} from "react-router-dom";


const mdtp = (dispatch) => ({
    handleStartOrder({history}) {

        console.log("STARTING ORDER");
        dispatch({type: "START_ORDER", history});
    }
})
export const Welcome = ({
    handleStartOrder,
    history = useHistory()
}) => (
    <div>
    <p>
        Please start a new order!
    </p>

    {/*< Link to= "/order"> */}

    
    <button onClick={()=>handleStartOrder({history})}>
        Start Order
    </button>
       {/* </Link> */}
    </div>
)

export const WrappedWelcomeRoute = connect(state => state, mdtp)(Welcome);