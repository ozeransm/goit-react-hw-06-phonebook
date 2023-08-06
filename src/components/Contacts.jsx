import { useSelector } from "react-redux";
import { ContactItem } from "./ContactItem";
import PropTypes from 'prop-types';
export const Contacts = ()=>{
    const phoneBook = useSelector((state)=>state.book.contacts);
    const filterPhone = useSelector((state)=>state.book.filter);
    const filterPhoneBook = phoneBook.filter(({name})=>name.toUpperCase().includes(filterPhone.toUpperCase()));
    
    return(
    <ul>
            {
              filterPhoneBook.map((el)=><ContactItem key={el.id} id={el.id} name={el.name} number={el.phone}/>)
            }
        </ul>
    )
}
Contacts.propTypes = {
  filterPhoneBook: PropTypes.arrayOf(
      PropTypes.shape({
          id:PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
      })
  ),
  filterPhone: PropTypes.string,
}