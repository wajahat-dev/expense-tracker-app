import React, {useContext} from 'react';
import {ContextGlobal} from '../context/GlobalState'

const Balance = () => {
    const {transactions} = useContext(ContextGlobal)
    
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((a,b)=>(a += b),0)

    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    );
}

export default Balance;

