import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store.js";
import Application from "./Application.js";

ReactDOM.render(
    <Provider store={store} >
        <Application />
    </Provider>,
    document.getElementById('root')
);
