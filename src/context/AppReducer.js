import React from 'react';

const AppReducer = (state, action)=>{

   switch(action.type){
        case "DELETE_TRANSACTION":
          return {
            ...state,
            transactions: state.transactions.filter((a)=>(
                a.id !== action.payload
            ))
          }
        case "ADD_TRANSACTION":
            return{
                ...state,
                transactions: [...state.transactions, action.payload]
            }   
        default:
            return state;
   }
}

export default AppReducer;
