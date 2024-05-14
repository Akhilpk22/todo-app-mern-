import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Update() {
    const [showModal, setShowModal] = useState(false);
   

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    

    return (
        <>
            <button type="button" onClick={handleShow} className="btn btn-primary me-3">
                Update
            </button>
            {/* Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="todoTitle" className="form-label">
                            Todo Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="todoTitle"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="todoDescription" className="form-label">
                            Todo Description
                        </label>
                        <textarea
                            className="form-control"
                            id="todoDescription"
                            rows="3"
                            
                        ></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> 
                    <Button variant="primary" >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Update;
