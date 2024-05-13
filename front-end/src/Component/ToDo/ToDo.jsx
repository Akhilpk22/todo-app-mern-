import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Update from "../Update/Update";

function ToDo() {
  const [showModal, setShowModal] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSaveTodo = () => {
    // You can perform save action here
    // console.log("Todo Title:", todoTitle);
    // console.log("Todo Description:", todoDescription);

    // Close the modal after saving todo
    handleCloseModal();
  };


  // login user
  const [username,setusername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setusername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])

  return (
    <div className="main-container  d-flex flex-column justify-content-center align-items-center gap-4">
      <h1>Todo App</h1>
      <div className="text-start mt-3">
        <span>{username}</span>
      </div>
      <div className="todo-container w-50 rounded shadow p-5 ">
        <div className="d-flex align-items-center justify-content-center ">
          <h2 className="p-2">What’s On Your List?</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <button
            onClick={handleShowModal}
            className="btn m-2 rounded bg-success-subtle"
          >
            create
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveTodo}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* 1 */}
      <div className="todo-container w-50 rounded shadow p-3">
        <div className="row">
          <div className="col">
            <h2>Title</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, minus molestiae perspiciatis tempore vel aut iure consequuntur voluptates aliquam id rem molestias debitis harum quisquam magnam, voluptas in quaerat non!</p>
          </div>
          <div className="col-auto">
            <div className="btn-group mt-5" role="group" aria-label="Todo Actions">
              
                <Update/>
              
              <button type="button" className="btn btn-danger">
                Delete  
              </button>
            </div>
          </div>
        </div>
      </div>
       {/* 2 */}
       <div className="todo-container w-50 rounded shadow p-3">
        <div className="row">
          <div className="col">
            <h2>Title</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, minus molestiae perspiciatis tempore vel aut iure consequuntur voluptates aliquam id rem molestias debitis harum quisquam magnam, voluptas in quaerat non!</p>
          </div>
          <div className="col-auto">
            <div className="btn-group mt-5" role="group" aria-label="Todo Actions">
              <button type="button" className="btn btn-primary me-3">
                Update
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
