import React from 'react';
import { withStockContext } from '../../context/stockContext';

class BuyStockNumber extends React.Component {
    render() {
        return <span>Stocks: {this.props.counter}</span>
    }
}

const BuyStockNumberContainer = withStockContext(BuyStockNumber);

export default BuyStockNumberContainer