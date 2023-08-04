import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', phone: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', phone: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', phone: '227-91-26'},
      ],
    filter: ""
}

const reducerSlice = createSlice({
name: 'phonebook',
initialState,
reducers:{
    'addContact': (state, action) => {
        state.contacts.push({id: action.payload.id, name: action.payload.name, phone: action.payload.phone})
    },
    'deleteContact': (state, action) => {
        const index = state.contacts.findIndex(task => task.id === action.payload.id);
        state.contacts.splice(index, 1);
        
    },
    'filter': (state, action) => {
        state.filter = action.payload.filter;        
    }
}
});

export const { addContact, deleteContact, filter } = reducerSlice.actions;
export default reducerSlice.reducer;
