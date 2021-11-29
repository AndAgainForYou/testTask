import React, {useState} from 'react';
import './App.css';

const  PageTwo = (props) => {

  const initialFormState = { id: null, name: '', username: null,  Cardname: null,  creationDate: null, status:null };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
  const { name, value } = event.target;
  
    setUser({ ...user, [name]: value });
  };

  return (<div className="inputs">
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.username || !user.status) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <div>
        <p>Name</p>
          <input 
              className="select"
              type="text" 
              name="name" 
              value={user.name}
              onChange={handleInputChange}
            />
      </div>
        <div>
          <p>Card type</p>
            <select 
                className="select"
                type="text" 
                name="username" 
                value={user.username}
                onChange={handleInputChange}>
                  <option value="">...</option>
                  <option value="Discout">Discout</option>
                  <option value="Other">Other</option>
                </select>
          </div>
          
            
                <div>
                  <p>cardStatus</p>
                  <select 
                      className="select"
                      type="text" 
                      name="status" 
                      value={user.status}
                      onChange={handleInputChange}>
                        <option value="">...</option>
                        <option value="Active">Active</option>
                        <option value="Not Active">Not Active</option>
                    </select>
                </div>
                  <div className="btns">
                    <button className="button">Add new user</button>
                  </div>
              </form>
              </div>
  );
}


            /*<div>
              <p>Card number</p>
                <input 
                className="select"
                  type="text" 
                  name="Cardname" 
                  value={user.Cardname}
                  onChange={handleInputChange} 
                  />
              </div>*/

export default PageTwo;
