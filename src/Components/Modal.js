import React from 'react';
import './Modal.css';
import Phone from '../assets/phone.png';

export const Modal = ({ show, close }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-content">
        <div className="modal-body">
          <img src={Phone} alt="Phone" />
          <p>Thank you for your message ! <br/> We will be in contact soon . </p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="buttondesing">Close</button>
        </div>
      </div>
    </div>
  )
};