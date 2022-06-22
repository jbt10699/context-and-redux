import React, { useContext } from 'react';
import { useCounter } from '../hooks/useCounter'

export const StockContext = React.createContext(null);

export const withStockContext = (WrappedComponent) => {
    return class NewComponent extends React.Component {
        static contextType = StockContext;
        render() {
            const [counter, handleAdd, handleSub, handleSetOption] = this.context;
            return <WrappedComponent {...this.props} counter={counter} handleAdd={handleAdd} handleSub={handleSub} handleSetOption={handleSetOption} />
        }
    }
}

export const useStockContext = () => {
    return useContext(StockContext);
}

export const StockContextProvider = (props) => {
    const [
        counter,
        increment,
        decrement,
        setOption
    ] = useCounter()

    return <StockContext.Provider value={[
        counter,
        increment,
        decrement,
        setOption
    ]}>
        {props.children}
    </StockContext.Provider>
}