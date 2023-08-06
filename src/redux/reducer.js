import { combineReducers, createSlice } from "@reduxjs/toolkit";
import Notiflix from 'notiflix';
const initialState = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', phone: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', phone: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', phone: '227-91-26'},],
    filter: "",
    inputName: "",
    inputPhone: ""
}

export const reducerPhonebook = createSlice({
name: 'phonebook',
initialState,
reducers:{
    'inputName': (state, {payload:{inputName}})=> {
        state.inputName = inputName;
    },
    'inputPhone': (state, {payload:{inputPhone}})=> {
        state.inputPhone = inputPhone;
    },
    'addContact': (state, {payload:{id, name, phone}}) => {
        if(!state.contacts.find(el=>el.name===String(name)))state.contacts.push({id, name, phone})
        else Notiflix.Notify.failure('Dublicate record');
    },
    'deleteContact': (state, {payload:{id}}) => {
        const index = state.contacts.findIndex(task => task.id === id);
        state.contacts.splice(index, 1);
        
    },
    'filter': (state, {payload:{filter}}) => {
        state.filter = filter;        
    }
}
});

export const reducer = combineReducers({ book: reducerPhonebook.reducer });

export const { addContact, deleteContact, inputName, inputPhone } = reducerPhonebook.actions;
export const { filter } = reducerPhonebook.actions;
