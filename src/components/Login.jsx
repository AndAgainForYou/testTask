import React, {useState} from "react";
import { Link } from "react-router-dom";

const Login = (props) => {



    const initialFormState = { userRole: null, userName: ''};
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
  const { name, value } = event.target;
  
    setUser({ ...user, [name]: value });
  };

    return(
        <div>
            <form
             onSubmit={(event) => {
                event.preventDefault()
                if (!user.userRole || !user.userName) return
        
                props.addUserStatus(user)
                setUser(initialFormState)
              }}
            > 
            <div>
                <p>User name</p>
                <input 
                    className="select"
                    type="text" 
                    name="userName" 
                    value={user.userName}
                    onChange={handleInputChange}
                    />
            </div>

            <div>
                  <p>User Role</p>
                  <select 
                      className="select"
                      type="text" 
                      name="userRole" 
                      value={user.userRole}
                      onChange={handleInputChange}
                      >
                        <option value="">...</option>
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="User">User</option>
                    </select>
                </div>
                    <div className="btns">
                        <button className="button">Update</button>
                        <button className="button cancel"><Link to="/One"><a>Cansel</a></Link></button>
                    </div>
                </form>
        </div>
    )
}
export default Login;