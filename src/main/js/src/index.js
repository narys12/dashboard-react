import React from 'react';
import { createStore } from 'redux'
import { render } from 'react-dom';
import {Provider} from 'react-redux'
import AppView from './components/AppView';
import reducer from './reducers'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <AppView />
    </Provider>,
    document.getElementById('root')
)
