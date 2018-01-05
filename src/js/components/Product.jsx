import React from 'react';
import { connect } from 'react-redux';

class Product extends React.Component{
    
    constructor(props) {
        super(props);
        this.displayProducts = this.displayProducts.bind(this);
    }

    displayProducts(product) {
        return(
        <div>
            <p>{product.name}</p>
            <p>Available: {product.quantity}</p>
            <p>Price: {product.cost}</p>
            <button onClick={this.props.cartFunc}>Add to Cart</button>
        </div>);
    }
      
        render(){
            let prod = this.props.products.map(this.displayProducts);
            return (
                <div className="border-right-0">
                {prod}
                </div>
            );
        }
    }
function mapStateToProps(state) {
    return {
       products: state.products,
    }
}

function mapDispatchToProps(dispatch) {
    return {
       cartFunc: function() {
        dispatch({type:"PRODUCT_CART"})
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);

