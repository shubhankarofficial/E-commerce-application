import React from 'react';

import {
    BrowserRouter,
    Route,
    Link

} from "react-router-dom";

export const MainRoute = () => (
    <div>
        <h1>
            Sugar and Spice
        </h1>
        <BrowserRouter>

        <Route path= "/" exact>
            <div>
                <p>
                    Please start a new order!
                </p>

                <Link to= "/order">

                
                <button>
                    Start Order
                </button>
                </Link>
            </div>


        </Route>
        <Route path= "/order" exact>
            Here we do orders!


        </Route>
        </BrowserRouter>
    </div>
)