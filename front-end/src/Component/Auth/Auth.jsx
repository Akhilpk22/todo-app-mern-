import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ register }) {
  const isRegisterForm = register ? true : false;

  return (
    <>
      <div
        style={{ width: '100%', height: '100vh' }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="w-75 container">
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
            <i  className="mt-5 fw-light fa-solid fa-arrow-left"></i>Back to Home
          </Link>
          <div className="card shadow p-5 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                
                <img
                  className="img-fluid"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-6114062-5059486.png?f=webp"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center  flex-column">
                  <h1 style={{ fontSize: '40px' }} className="fw-bolder  mb-3">
                    TODO-APP
                  </h1>
                  <h5 className="mb-4">
                    {isRegisterForm
                      ? 'Sign up to your Account'
                      : 'Sign in to your Account'}
                  </h5>

                  <Form className="text-light w-100">
                    {isRegisterForm && (
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter UserName" />
                      </Form.Group>
                    )}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>

                    {isRegisterForm ? (
                      <div>
                        <button className="btn btn-light mb-2">Register</button>
                        <p className='text-black'>
                          Already have an Account? Click here to{' '}
                          <Link style={{textDecoration:"none"}} to={'/login'}>Login</Link>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <button className="btn btn-light mb-2">Login</button>
                        <p className='text-black'>
                          New User? Click here to <Link style={{textDecoration:"none"}} to={'/register'}>Register</Link>
                        </p>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Auth;
