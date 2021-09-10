import './App.css';

import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm.component.jsx';
import UserData from './components/UserData/UserData.components.jsx';

function App() {
  const [user, setUser] = useState([]);

  const handleUser = (username, age) => {
    setUser((prevUser) => {
      return [
        ...prevUser,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  console.log(user);

  return (
    <div>
      <UserForm onAddUser={handleUser} />
      <UserData users={user} />
    </div>
  );
}

export default App;
