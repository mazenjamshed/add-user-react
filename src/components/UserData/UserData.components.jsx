import React from 'react';

const UserData = ({ users }) => {
  return (
    <div className='user-data'>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.name}({user.age})
          </div>
        );
      })}
    </div>
  );
};

export default UserData;
