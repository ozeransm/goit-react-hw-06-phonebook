// import { useDispatch, useSelector } from "react-redux";
// import { addContact, increment } from "./redux/reducer";
// import { nanoid } from "nanoid";
import css from "./App.module.css";
import { Contacts } from "./Contacts";
import { FindContact } from "./FindContact";
import { Form } from "./Form";


export const App = () => {

  return (
    
    <div className={css.common}>
      <h1>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <FindContact />
      <Contacts/>
    </div> 
     
  );
};
