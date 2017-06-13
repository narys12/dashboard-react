import React from 'react';
import { createStore } from 'redux'
import { render } from 'react-dom';
import {Provider} from 'react-redux'
import LayoutView from './components/LayoutView';
import reducer from './reducers'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <LayoutView />
    </Provider>,
    document.getElementById('root')
)
