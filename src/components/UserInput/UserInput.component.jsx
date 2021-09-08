import React from 'react';

const UserInput = ({ name, label, ...otherProps }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...otherProps} />
    </div>
  );
};

export default UserInput;
