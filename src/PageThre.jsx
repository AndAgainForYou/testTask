import React, { useState } from 'react'


const PageThre = (props) => {


    const [user, setUser] = useState(props.currentUser)
  
    const handleInputChange = (event) => {
      const { name, value } = event.target
  
      setUser({ ...user, [name]: value })
    }


  return (
      <div className="editor">
        <p>Update Id:{user.id}</p>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              props.updateUser(user.id, user)
            }}
          >
      <div>
        <p>Name</p>
          <input
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
              <button className="button">Update user</button>
              <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
            </div>
      </form>
  </div>
  );
}

/*<div>
<p>Username</p>
  <input
    type="text"
    name="username"
    value={user.username}
    onChange={handleInputChange}
  />
</div>*/

export default PageThre;
