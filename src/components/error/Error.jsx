/* eslint-disable no-unused-vars */
import React from 'react';
import './error.css';

const Error = ({ onCloseAction, show }) => {
  return show ? (
    <label onClick={onCloseAction} className='error'>
      Error: Invalid input!!!!11
    </label>
  ) : null;
};

export default Error;
