import { useDispatch } from "react-redux";
import { deleteContact } from "./redux/reducer";


export const ContactItem = ({id, name, number})=>{
    const dispatch = useDispatch();
    
    return(
        <li>{name}: {number} <button onClick={()=>dispatch(deleteContact({id}))}>Delete</button></li>
    )
}
