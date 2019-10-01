import React from 'react';
import ReactDOM from 'react-dom';
import './styles/modal.css';

function Modal(props){

    if (!props.isOpen) {
        return null;
      }

    return ReactDOM.createPortal(
    <div className="Modal">
    <div className="Modal__container" role="document">
      {props.children}
    </div></div>, 
  document.getElementById("exampleModal"));
    
}

export default Modal;