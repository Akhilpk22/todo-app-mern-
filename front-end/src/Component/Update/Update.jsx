import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { editTodAPI } from '../../Services/allAPI';

function Update({ todo }) {
    const [showModal, setShowModal] = useState(false);
    const [todoDetails, setTodoDetails] = useState({
        id: todo._id,
        todoTitle: todo.todoTitle,
        todoDescription: todo.todoDescription,
    });

    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = () => setShowModal(true);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setTodoDetails({
            ...todoDetails,
            [id]: value,
        });
    };

    const handleUpdate = async () => {
        const { id, todoTitle, todoDescription } = todoDetails;
        if (!todoTitle || !todoDescription) {
            alert('Please fill the form completely!!!');
        } else {
            const reqBody = {
                todoTitle,
                todoDescription,
            };

            const token = sessionStorage.getItem('token');
            const reqHeader = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            };

            try {
                const result = await editTodAPI(id, reqBody, reqHeader);

                if (result.status === 200) {
                    handleClose();
                  
                } else {
                    console.log(result);
                    alert(result.response.data);
                }
            } catch (error) {
                console.error('Error updating todo:', error);
              
            }
        }
    };

    return (
        <>
            <button type="button" onClick={handleShow} className="btn btn-primary me-3">
                Update
            </button>
            {/* Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Todo</Modal.Title>
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
                            value={todoDetails.todoTitle}
                            onChange={handleInputChange}
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
                            value={todoDetails.todoDescription}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Update;
