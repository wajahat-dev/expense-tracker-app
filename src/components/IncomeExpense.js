import React,{useContext} from 'react';
import {ContextGlobal} from '../context/GlobalState'

const IncomeExpense = () => {
    const {transactions} = useContext(ContextGlobal)
    const amount = transactions.map(transaction => transaction.amount)
    const income = amount.filter(a => a > 0).reduce((a,b)=> a+= b,0).toFixed(2)
    const expense = amount.filter(a => a < 0).reduce((a,b)=> a+= b,0).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id='money-plus' className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
    <p id="money-minus" className="money minus">${Math.abs(expense)}</p>
            </div> 
        </div>
    );
}

export default IncomeExpense;
