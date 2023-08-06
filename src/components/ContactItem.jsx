import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/reducer";

export const ContactItem = ({id, name, number})=>{
    const dispatch = useDispatch();
    
    return(
        <li>{name}: {number} <button onClick={()=>dispatch(deleteContact({id}))}>Delete</button></li>
    )
}
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
    
  }