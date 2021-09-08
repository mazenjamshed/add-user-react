import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import UserInput from '../UserInput/UserInput.component';

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(age);

    setName('');
    setAge('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className='user-form'>
      <form onSubmit={handleSubmit}>
        <UserInput
          type='text'
          name='user'
          id='user'
          label='UserName'
          value={name}
          onChange={handleNameChange}
          required
        ></UserInput>

        <UserInput
          type='number'
          name='age'
          id='age'
          label='Age(Years)'
          value={age}
          onChange={handleAgeChange}
          required
        ></UserInput>
        <CustomButton label='Add User'></CustomButton>
      </form>
    </div>
  );
};

export default UserForm;
