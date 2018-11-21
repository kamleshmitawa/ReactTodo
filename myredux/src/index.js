import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/Combine'
import App from './components/App'

import registerServiceWorker from './registerServiceWorker';

const store=createStore(rootReducer)
render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
