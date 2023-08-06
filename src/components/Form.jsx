import { useDispatch } from "react-redux";
import { addContact } from "./redux/reducer";
import { nanoid } from "nanoid";
import css from './Form.module.css';
import Notiflix from 'notiflix';
export const Form = ()=>{
    
    const dispatch = useDispatch();
  
    function handleSubmit(e){
        e.preventDefault();
        const nameContact = e.target.elements.name.value.trim();
        const phoneContact = e.target.elements.phone.value.trim();
        if (nameContact&&phoneContact){
          dispatch(addContact({id: nanoid(), name: nameContact, phone: phoneContact}))
          e.target.elements.name.value='';
          e.target.elements.phone.value='';
        }else Notiflix.Notify.failure('Empty field');
    }
    return(
        <form className={css.common} action="submit" onSubmit={handleSubmit} >
        <label htmlFor="name">
        <span>Name</span>
          <input type="text" name="name" id="name" onFocus={(e)=>e.target.value=''}/>
        </label>
        <label htmlFor="phone">
        <span>Number</span> 
          <input type="text" name="phone" id="phone" onFocus={(e)=>e.target.value=''}/>
        </label>
        <button type="submit" className={css.btnForm}>Add</button>
      </form>
    )
}