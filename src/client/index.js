import React from 'react';
import ReactDOM from 'react-dom';

import {MainRoute} from './routes';

const App = () => (
    <div>
        <MainRoute />
    </div>
)

ReactDOM.render(< App />, document.querySelector("#Container"));
