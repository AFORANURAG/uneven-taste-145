import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {modalcontext} from  "../contexts/modalcontext"
function Modalbox() {
 const {show,setShow,handleClose,handleShow}=useContext(modalcontext)

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning ! Wrong credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
Wrong credentials, Please check your email and password again.Your password must be of length
6 and it should.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export {Modalbox}