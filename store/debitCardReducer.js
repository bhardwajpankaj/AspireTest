// we are holding our data in this component as global available for complete APP
import { createSlice } from "@reduxjs/toolkit";

const initialState = {         
    cardCVV: null,  
    cardNumber: null,   
    numberVisible: false,                          
    validThru: null,                
    cardHolder: null,               
    availableBalance: null,  
    weeklySpendingLimit:null,      
    weeklySpendingLimitExhausted:null
};

export const debitCardReducer = createSlice({
     //Action
    name: 'debitCard',   
    initialState,
    reducers: {
        setCompleteCardDetails: (state, action) => {
            state.cardCVV = action.payload.cardCVV;
            state.cardNumber = ''+action.payload.cardNumber;
            state.numberVisible = action.payload.numberVisible;
            state.validThru = action.payload.validThru;
            state.cardHolder = action.payload.cardHolder;
            state.availableBalance = ''+action.payload.availableBalance;
            state.weeklySpendingLimit = action.payload.weeklySpendingLimit;
            state.weeklySpendingLimitExhausted = action.payload.weeklySpendingLimitExhausted;
        },
        setCardNumberVisible: (state, action) => { 
            state.numberVisible = action.payload.numberVisible;
        },
        setWeeklySpendingLimit: (state, action) => { 
            state.weeklySpendingLimit = action.payload.weeklySpendingLimit;
        },
        setWeeklySpendingLimitExhausted: (state, action) => { 
            state.weeklySpendingLimitExhausted = action.payload.weeklySpendingLimitExhausted;
        },      
    }
});

//Selectors 

export const { setCardNumberVisible, setCardNumber, setCompleteCardDetails, setWeeklySpendingLimit, setWeeklySpendingLimitExhausted } = debitCardReducer.actions;
export const selectCardNumberVisible = (state) => state.debitCard.numberVisible;
export const selectCardNumber = (state) => state.debitCard.cardNumber;
export const selectCardValidThru = (state) => state.debitCard.validThru;
export const selectCardCVV = (state) => state.debitCard.cardCVV;
export const selectcardHolder = (state) => state.debitCard.cardHolder;
export const selectAvailableBalance = (state) => state.debitCard.availableBalance;
export const selectWeeklySpendingLimit = (state) => state.debitCard.weeklySpendingLimit;
export const selectWeeklySpendingLimitExhausted = (state) => state.debitCard.weeklySpendingLimitExhausted;
export default debitCardReducer.reducer; 