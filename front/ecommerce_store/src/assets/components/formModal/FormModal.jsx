import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



export default function FormModal({modalState, setModalState}) {
  return (
    <div>
      <Modal show={modalState} onHide={()=>setModalState(!modalState)} onClick={()=>setModalState(!modalState)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Form status</Modal.Title>
        </Modal.Header>
        <Modal.Body>Form submitted successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setModalState(!modalState)}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}
