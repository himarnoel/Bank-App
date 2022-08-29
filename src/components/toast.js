import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Toaster(props) {
 

  return (
    <div>
      
      <ToastContainer className="p-3 mt-5" position="top-end">
        <Toast onClose={() => props.setShow(false)} bg={props.bg} show={props.show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="mx-auto fs-6">{props.head}</strong>
           
          </Toast.Header>
          <Toast.Body className={props.color}>
           {props.tail}
          </Toast.Body>
        </Toast>
        </ToastContainer>
       
     
    </div>
  );
}

export default Toaster;