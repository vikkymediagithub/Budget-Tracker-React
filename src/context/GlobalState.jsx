import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//  initial State
const initialState = {
    transactions: [
        {id : 1,  text: 'beans', amount: 30},
        {id : 2,  text: 'rice', amount: -10},
        {id : 3,  text: 'book', amount: 220},
        {id : 4,  text: 'laptop', amount: -30},
    ]
}


// create context
export const GlobalContext = createContext(initialState);



// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
   

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}