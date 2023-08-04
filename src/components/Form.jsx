import { useDispatch } from "react-redux";
import { addContact } from "./redux/reducer";
import { nanoid } from "nanoid";
import css from './Form.module.css';
export const Form = ()=>{
    // const count = useSelector((state)=>state.value);
    // const phoneBook = useSelector((state)=>state.contacts)
    const dispatch = useDispatch();
  
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addContact({id: nanoid(), name: e.target.elements.name.value, phone: e.target.elements.phone.value}))
    }
    return(
        <form className={css.common} action="submit" onSubmit={handleSubmit}>
        <label htmlFor="name">
        <span>Name</span>
          <input type="text" name="name" id="name"/>
        </label>
        <label htmlFor="phone">
        <span>Number</span> 
          <input type="text" name="phone" id="phone"/>
        </label>
        <button type="submit" className={css.btnForm}>Add</button>
      </form>
    )
}