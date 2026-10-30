import React from 'react';
import './Toast.scss';

const Toast = ({ message, isVisible }) => {
  return (
    <div className={`toast-notification ${isVisible ? 'show' : ''}`}>
      <i className="fa-solid fa-circle-check text-cyan"></i>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
