// PasswordDisplay.js
import React from 'react';

const PasswordDisplay = ({ password }) => {
  return (
    <div>
      <label>Generated Password:</label>
      <input type="text" value={password} readOnly />
    </div>
  );
};

export default PasswordDisplay;
