import React, { useContext } from 'react';
import { useCounter } from '../hooks/useCounter'
import useLoading from "../hooks/useLoading";


export const StockContext = React.createContext(null);

export const withStockContext = (WrappedComponent) => {
    return class NewComponent extends React.Component {
        static contextType = StockContext;
        render() {
            const [stockAmount, buyStock, sellStock, setStockOption] = this.context;
            return <WrappedComponent {...this.props} stockAmount={stockAmount} buyStock={buyStock} sellStock={sellStock} setStockOption={setStockOption} />
        }
    }
}

export const useStockContext = () => {
    return useContext(StockContext);
}

export const StockContextProvider = (props) => {
    const [
        stockAmount,
        buyStock,
        sellStock,
        setStockOption
    ] = useCounter()

    return <StockContext.Provider value={[
        stockAmount,
        buyStock,
        sellStock,
        setStockOption
    ]}>
        {props.children}
    </StockContext.Provider>
}