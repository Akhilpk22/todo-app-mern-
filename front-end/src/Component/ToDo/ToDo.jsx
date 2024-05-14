import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Update from "../Update/Update";
import { addtodoAPI } from "../../Services/allAPI";
import { usertodoAPI } from "../../Services/allAPI";

function ToDo() {
  const [showModal, setShowModal] = useState(false);

  // state
  const [todoDetails, settodoDetails] = useState({
    todoTitle: "",
    todoDescription: "",
  });

  const handleClose = () => {
    setShowModal(false);
    settodoDetails({
      todoTitle: "",
      todoDescription: "",
    });
  };
  const handleShow = () => setShowModal(true);

  // find state tokens
  const [token, setToken] = useState("");

  // find token  useEffect
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  // handle add
  const handleAdd = async (e) => {
    e.preventDefault();
    const { todoTitle, todoDescription } = todoDetails;
    if (!todoTitle || !todoDescription) {
      alert("please fill the from !!!!");
    } else {
      const reqBody = new FormData();
      reqBody.append("todoTitle", todoTitle);
      reqBody.append("todoDescription", todoDescription);

      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const result = await addtodoAPI(reqBody, reqHeader);

        if (result.status === 200) {
          console.log(result.data);
          handleClose();
          alert("add new todo");
          // setaddProjectResponse(result.data)
        } else {
          console.log(result);
          console.log(result.response.data);
        }
      }
    }
  };

  // login username
  const [username, setusername] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setusername(JSON.parse(sessionStorage.getItem("existingUser")).username);
    }
  }, []);

  // get user todo
  const [usertodo, setusertodo] = useState([]);
  const getUsertodo = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await usertodoAPI(reHeader);
      if (result.status === 200) {
        setusertodo(result.data);
      } else {
        console.log(result);
      }
    }
  };
  useEffect(() => {
    getUsertodo();
  }, [usertodo]);

  return (
    <div className="main-container  d-flex flex-column justify-content-center align-items-center">
      <h1>Todo App</h1>
      <div className="text-start mt-3">
        <span className="fw-bolder fs-5">{username}</span>
      </div>
      <div className="todo-container w-50 rounded shadow p-1 ">
        <div className="d-flex align-items-center justify-content-center ">
          <h2 className="p-2">What’s On Your List?</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <button
            onClick={handleShow}
            className="btn m-2 rounded bg-success-subtle"
          >
            create
          </button>
        </div>
      </div>

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
              placeholder="enter the todo Title"
              value={todoDetails.todoTitle}
              onChange={(e) =>
                settodoDetails({
                  ...todoDetails,
                  todoTitle: e.target.value,
                })
              }
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
              onChange={(e) =>
                settodoDetails({
                  ...todoDetails,
                  todoDescription: e.target.value,
                })
              }
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* 1 */}
      {/* User Todos */}
    <div className="todo-container rounded shadow p-5 w-100 w-md-75 w-lg-50">
    {usertodo && usertodo.length > 0 ? (
      usertodo.map((todo, index) => (
        <div className="todo-item-container mb-3 p-3 shadow-lg" key={index}>
          <div className="row align-items-center">
            <div className="col-12 col-md-8">
              <div>
                <h2>{todo.todoTitle}</h2>
                <p className="text">{todo.todoDescription}</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-end">
                <div className="btn-group" role="group" aria-label="Todo Actions">
                  <Update />
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-danger fw-bolder fs-5 mt-3">No Todos Uploaded Yet!!!</p>
    )}
  </div>
   
    </div>
  );
}

export default ToDo;
