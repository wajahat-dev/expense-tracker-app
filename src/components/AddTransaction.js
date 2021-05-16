import React, { useState, useContext } from 'react';
import {ContextGlobal} from "../context/GlobalState"

const AddTransaction = () => {
    const [description, descriptionState] = useState("")
    const [amount, amountState] = useState("")
    const {addTransaction} = useContext(ContextGlobal);


    const submit = (e)=>{
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: description,
            amount: +amount,
        }
        addTransaction(newTransaction)
    }

    return (
        <div>
            <h4>Add New Transaction</h4>
            <form id="form" onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="description" >Description</label>
                    <input type="text" value={description} onChange={(e) => {
                        descriptionState(e.currentTarget.value)
                    }} id="description" placeholder="Write something" />

                </div>
                <div className="form-control">
                    <label htmlFor="amount">Transaction Amount <br />
                (negative - expense, positive - incme)
                </label>
                    <input type="number" value={amount} onChange={(e) => {
                        amountState(e.target.value)
                    }} id="amount" placeholder="Enter amount" />

                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
