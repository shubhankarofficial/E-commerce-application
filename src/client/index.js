import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {MainRoute} from './routes';
import { store } from './store';

const App = () => (
    <div>
        <Provider store={store}>
            <MainRoute />
        </Provider>
    </div>
)

ReactDOM.render(< App />, document.querySelector("#Container"));

console.log("The state?", store.getState());

store.dispatch({type: "INIT"});
