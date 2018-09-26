import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'


import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectRouter>
    </Provider>
    ,
    document.getElementById('root')
)
registerServiceWorker();
