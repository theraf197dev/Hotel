import React from 'react'

const Modal = ({closeModal, title, msg}) => {
  return (
    <div className="modal show-modal" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
                {msg}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal