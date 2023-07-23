import React from 'react';

import { WrapperOrderRoute } from './orders'
import { WrappedWelcomeRoute } from './welcome';


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

            <WrappedWelcomeRoute />
            

        </Route>
        <Route path= "/order" exact>
            <WrapperOrderRoute />


        </Route>
        </BrowserRouter>
    </div>
)