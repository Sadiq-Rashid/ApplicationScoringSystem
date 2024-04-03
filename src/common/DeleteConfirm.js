import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteConfirm = ({handleConfirmDelete, itemName, handleClose, show}) => {
  
  return (
    <div>

<>

      <Modal className=' p-4' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-4 alert alert-danger'>Are you sure you want to delete {itemName}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="alert alert-danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    </div>


  )
}

export default DeleteConfirm