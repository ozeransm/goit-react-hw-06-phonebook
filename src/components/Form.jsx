import { useDispatch, useSelector } from "react-redux";
import { addContact, inputName, inputPhone } from "../redux/reducer";
import { nanoid } from "nanoid";
import css from './Form.module.css';
import Notiflix from 'notiflix';

export const Form = ()=>{
    const dispatch = useDispatch();
    const nameContact = useSelector(state=>state.book.inputName);
    const phoneContact = useSelector(state=>state.book.inputPhone);
    function handleSubmit(e){
        e.preventDefault();
        // const nameContact = e.target.elements.name.value.trim();
        // const phoneContact = e.target.elements.phone.value.trim();
        
        if (nameContact.trim()&&phoneContact.trim()){
          dispatch(addContact({id: nanoid(), name: nameContact.trim(), phone: phoneContact.trim()}))
          dispatch(inputName({inputName: ""}));
          dispatch(inputPhone({inputPhone: ""}));
          // e.target.elements.name.value='';
          // e.target.elements.phone.value='';
        }else Notiflix.Notify.failure('Empty field');
    }
    function handlerChange({target:{value, name}}){
      switch(name){
        case 'name': dispatch(inputName({inputName: value}));break;
        case 'phone': dispatch(inputPhone({inputPhone: value}));break;
        default: break;
      }
      
    }

    return(
        <form className={css.common} onSubmit={handleSubmit} >
        <label htmlFor="name">
        <span>Name</span>
          <input type="text" name="name" id="name" onChange={handlerChange} value={nameContact}/>
        </label>
        <label htmlFor="phone">
        <span>Number</span> 
          <input type="text" name="phone" id="phone" onChange={handlerChange} value={phoneContact}/>
        </label>
        <button type="submit" className={css.btnForm}>Add</button>
      </form>
    )
}