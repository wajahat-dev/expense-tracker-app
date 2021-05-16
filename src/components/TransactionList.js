import React, {useContext} from 'react';
import {ContextGlobal} from '../context/GlobalState'
import Transaction from "./Transaction"

const TransactionList = () => {
    const {transactions, deleteTransaction} = useContext(ContextGlobal)

    return (
        <div>
            <h4>History</h4>
            <ul id="list" className="list">
                {transactions.map((transaction) => {
                    return(
                        <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>
                    )
                })}
            </ul>
        </div>
    );
}

export default TransactionList;
