import { useSelector } from "react-redux";
import { ContactItem } from "./ContactItem";

export const Contacts = ()=>{
    const phoneBook = useSelector((state)=>state.contacts);
    const filter = useSelector((state)=>state.filter);
    const filterPhoneBook = phoneBook.filter(({name})=>name.toUpperCase().includes(filter.toUpperCase()));
    return(
    <ul>
            {
              filterPhoneBook.map((el)=><ContactItem key={el.id} id={el.id} name={el.name} number={el.phone}/>)
            }
        </ul>
    )
}