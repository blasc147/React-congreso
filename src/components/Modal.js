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
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button onClick={props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div></div>, 
  document.getElementById("exampleModal"));
    
}

export default Modal;