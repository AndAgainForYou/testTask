
import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import PageOne from "./PageOne";
import PageTwo from './PageTwo';
import PageThre from './PageThre';
import Header from './components/Header';
import React, {useState} from "react";
import Inclusion from './components/inclusion';
import Login from './components/Login';

const App = (props) => {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette', Cardname: '22', creationDate: '2021-11-27', status: 'Active'},
    { id: 2, name: 'Tania', username: 'floppydiskette', Cardname: '44', creationDate: '2021-11-27', status: 'Active' },
    { id: 3, name: 'Tania', username: 'floppydiskette', Cardname: '66', creationDate: '2021-11-27', status: 'Active' },
  ];
  const userStatus = [
    {userRole: 'Admin', userName: 'jonsh Smith'}, //2
  ];

  const [status, setStatus] = useState(userStatus); //2
  const [users, setUsers] = useState(usersData);

  const addStatus = (user) => {       //2
    setStatus([user]);
  };

  const addUser = (user) => {
    user.id = users.length + 1;
    user.Cardname = Math.floor(Math.random() * 100);
    user.creationDate = new Date().toISOString().slice(0, 10);
    setUsers([...users, user]);
  };


  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', username: null, Cardname: null,  creationDate: null, status:null };
  const initialFormStatus = { userRole: '', userName: ''}; //2
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username, Cardname: user.id, creationDate: user.name, status: user.status })
  };
  

  const updateUser = (id, updatedUser) => {
    setEditing(false);
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };


  return (
    <div className="App">
      <Header status={status}/>
      <Routes>
        <Route path="/One" element={<Inclusion users={users} 
          setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}
          addUser={addUser} deleteUser={deleteUser} editRow={editRow}
          editing={editing}
          />} />
          <Route path="/Two" element={<Login status={status} addUserStatus={addStatus} />}/>
      </Routes>

    </div>
  );
}
//<Route path="/thre" element={<PageThre setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>} />
      

//<Route path="/" element={<PageOne users={users} 
//setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}
//addUser={addUser} deleteUser={deleteUser} editRow={editRow}/>} />

export default App;
