import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
// Initial State

const initialState = {
    transactions:[
        {id:1, text: 'flower', 'amount' : -20},
        {id:2, text: 'Slaray', 'amount': 300},
        {id:3, text: 'Book', 'amount': -10},
        {id:4, text: 'Camera', 'amount': 150}
    ]
}


// Create Context
export const ContextGlobal = createContext(initialState)


// Provider Component
const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer,initialState)

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
 
 
    

    return(
    <ContextGlobal.Provider value={
      {  transactions: state.transactions,
        deleteTransaction,
        addTransaction}
    }>

        {props.children }
    </ContextGlobal.Provider>
    )
}

export default GlobalProvider;