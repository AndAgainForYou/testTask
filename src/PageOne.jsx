import React, {useState} from 'react';
import './App.css';




  const PageOne = (props) => {

  const initialFormState = { id: null, name: '', username: '', Cardname: null, creationDate: null, status: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
  const { name, value } = event.target;
  
    setUser({ ...user, [name]: value });
  };

  return (
  <div className="table-data">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Card type</th>
          <th>Card number</th>
          <th>Creatoin date</th>
          <th>Status</th>
          <th>Buttons</th>
        </tr>
      </thead>
        <tbody>
          {props.users.length > 0 ? (
             props.users.map((user) => (
              <tr key={user.id}>
                
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.Cardname}</td>
                <td>{user.creationDate}</td>
                <td>{user.status}</td>
                  <td>
                    <button onClick={() => props.editRow(user)} className="button muted-button">Edit</button>
                    <button onClick={() => props.deleteUser(user.id)} className="button muted-button">delete</button>
                  </td>
              </tr>
                  ))) : (
                  <tr>
                    <td colSpan={3}>No organization, please create one</td>
                  </tr>
                )}
                </tbody>
              </table>
  </div>
          );
        }


export default PageOne;
