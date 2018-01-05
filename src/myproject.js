import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './js/components/App.jsx';

function productReducer(state,action) {
    if(typeof state === 'undefined') {
        return 0;
    }
    switch(action.type) {
        case 'PRODUCT_CART':
           return state - 1;
        default:
           return state;
    }
}


function totalPriceReducer(state,action) {
    if(typeof state === 'undefined') {
        return 0;
    }
    switch(action.type) {
        case 'TOTAL_PRICE':
           return state + 1;
        default:
           return state;
    }
}

const combineReducer = combineReducers({
    products: productReducer,
    totalPrice: totalPriceReducer
});

const initialState = {
    products:[
        {name: "iphone",quantity:10,cost:1100},
        {name: "laptop",quantity:5,cost:800},
        {name: "camera",quantity:10,cost:500},
        {name: "mac",quantity:4,cost:1500},
      ],    
    totalPrice: 0
};

const store = createStore(combineReducer, initialState);

function render() {
    ReactDOM.render( <Provider store={store}>
                   <App />
                 </Provider> 
                   , document.getElementById('main'));
}

render();
store.subscribe(render);





