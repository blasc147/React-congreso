import React from 'react';
import ReactDOM from 'react-dom';
import './styles/modal.css';
import Modal from './Modal';

function DeleteModal(props){


    return (
        <Modal isOpen={props.isOpen} >

        <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Eliminar Curso</h5>
          <button onClick={props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          Estas seguro que queres eliminar este curso?
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <button onClick={props.onDeleteCurso} type="button" className="btn btn-danger">Confirmar</button>
        </div>
      </div>

      </Modal>);
    
}

export default DeleteModal;