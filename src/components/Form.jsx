import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/reducer";
import { nanoid } from "nanoid";
import css from './Form.module.css';
import Notiflix from 'notiflix';
import { useState } from "react";
import { contacts as contactPhone } from "redux/selector";

export const Form = ()=>{
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    
    const contacts = useSelector(contactPhone);
    function handleSubmit(e){
        e.preventDefault();
        
        if (name&&phone){
          if (!contacts.find(el=>el.name===String(name)))
            dispatch(addContact({id: nanoid(), name: name, phone: phone}))
          else Notiflix.Notify.failure('Dublicate record');
          setName('');
          setPhone('');
          
        }else Notiflix.Notify.failure('Empty field');
    }
    function handlerChange({target:{value, name}}){
      switch(name){
        case 'name': setName(value.trim());break;
        case 'phone': setPhone(value.trim());break;
        default: break;
      }
      
    }

    return(
        <form className={css.common} onSubmit={handleSubmit} >
        <label htmlFor="name">
        <span>Name</span>
          <input type="text" name="name" id="name" onChange={handlerChange} value={name}/>
        </label>
        <label htmlFor="phone">
        <span>Number</span> 
          <input type="text" name="phone" id="phone" onChange={handlerChange} value={phone}/>
        </label>
        <button type="submit" className={css.btnForm}>Add</button>
      </form>
    )
}