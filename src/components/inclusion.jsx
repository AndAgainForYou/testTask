import React from "react";
import PageOne from "../PageOne";
import PageThre from "../PageThre";
import PageTwo from "../PageTwo";

const Inclusion = (props) => {
    return(
        <div><PageOne 
            users={props.users} 
            setEditing={props.setEditing} 
            currentUser={props.currentUser} 
            updateUser={props.updateUser}
            addUser={props.addUser} 
            deleteUser={props.deleteUser} 
            editRow={props.editRow}
            />
        {props.editing ? (<PageThre 
            setEditing={props.setEditing} 
            currentUser={props.currentUser} 
            updateUser={props.updateUser}
            /> ) : (<PageTwo setUser={props.setUser} addUser={props.addUser} />)}
        </div>
    )
}
export default Inclusion;