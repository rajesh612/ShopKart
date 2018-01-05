import React from 'react';
import Product from './Product.jsx';

export default class ProductDetails extends React.Component{
    
        render(){
            return (
                <div className="border-right-0">
                <p>Product Details</p>
                <Product/>
                </div>
            );
        }
    }