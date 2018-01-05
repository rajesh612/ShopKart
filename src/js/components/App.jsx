import React from 'react';
import ProductDetails from './ProductDetails.jsx';
import PriceDetails from './PriceDetails.jsx';
import PropTypes from 'prop-types';

export default class App extends React.Component {
//   constructor(props) {
//       super(props);
//       console.log(props);
//       this.state = {
//           counter: 1,
//           childCounter:1
//       }
//       this.increment = this.increment.bind(this);
//       this.incrementForChild = this.incrementForChild.bind(this);
//   }
//   increment(){
//       this.setState({
//           counter: this.state.counter+1
//       })
//   }
//   incrementForChild(){
//       this.setState({
//           childCounter: this.state.childCounter+1
//       })
//   }
//   getChildContext() {
//       return {
//           contextCounter: this.state.childCounter,
//           contextFnc: this.increment,
//       };
//   }
  render(){
      return (
          <div className="container well">
              <p>Shopping Cart</p>
              <div className="container well">
                <ProductDetails/>
              </div>
              <div className="container well">
                <PriceDetails/>
              </div>
          </div>
      );
  }
}

