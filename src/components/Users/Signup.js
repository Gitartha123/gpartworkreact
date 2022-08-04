import React from 'react';
import logo from '../../image/gpartworklogo.png';
import Commonmodalform from './Commonmodalform';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

const Signup = () => {
  const inputs = [
    {
      key: 1,
      name: "username",
      type: "text",
      placeholder: "Enter your name......",
      className: "form-control bg-transparent border-primary  fw-normal  p-3 text-white",
      label: "Name",
      id: "floatingInput",
    },
    {
      key: 2,
      name: "address",
      type: "text",
      placeholder: "Enter your address......",
      className: "form-control bg-transparent border-primary  fw-normal p-3 text-white",
      label: "Address",
      id: "floatingInput2",
    },
    {
      key: 3,
      name: "email",
      type: "email",
      placeholder: "Enter your Email ID......",
      className: "form-control bg-transparent border-primary  fw-normal p-3 text-white",
      label: "Email ID",
      id: "floatingInput3",
    },
    {
      key: 4,
      name: "ph",
      type: "number",
      placeholder: "Enter your Phone number......",
      className: "form-control bg-transparent border-primary  fw-normal p-3 text-white",
      label: "Ph No",
      id: "floatingInput4",
    },
    {
      key: 5,
      name: "password",
      type: "password",
      placeholder: "Enter Password......",
      className: "form-control bg-transparent border-primary  fw-normal p-3 text-white",
      label: "Password",
      id: "floatingInput5",
    },
    {
      key: 6,
      name: "cpassword",
      type: "password",
      placeholder: "Re Enter your password......",
      className: "form-control bg-transparent border-primary  fw-normal p-3 text-white",
      label: "Confirm Password",
      id: "floatingInput6",
    }
  ]

  const validation = Yup.object({
    username: Yup.string().required('Please enter your name !!').max(100, 'Maximum character is 100 !!').min(3, 'Minimum character is 3 !!').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field !!"),
    email: Yup.string().required('Please enter your email ID !!').email('Invalid email ID !!').max(100, 'Maximum character is 100'),
    address: Yup.string().required('Please enter address !!').max(100, "Maximum character is 100"),
    ph: Yup.number().required('Please enter your phone number').max(10, "Phone number cannot be more than 10 digits !!").min(10, "Phone number cannot be less than 10 digits !!"),
    password: Yup.string().required('Please enter password !!').max(14, 'Maximum character is 14 !!').min(8, 'Minimum character is 8').minLowercase(1, 'Need atleast one lowercase letter').minUppercase(1, 'Need atleast one uppercase letter').minSymbols(1, 'Need atleast one special character').minNumbers(1, 'Need atleast one number'),
    cpassword: Yup.string().required('Please re enter password !!').oneOf([Yup.ref("password"), null], "Password doesnot matched !!")
  })

  return (
    <div>
      <div className="modal fade" id="signupModal" tabIndex="-1" data-bs-backdrop="static">
        <div className="modal-dialog ">
          <div className="modal-content bg-dark-blue shadow-sm">
            <div className="modal-header my-0">
              <button className='btn btn-success btn-small rounded text-white' data-bs-dismiss="modal" aria-label="Close"><i className='fa fa-arrow-left'></i></button>
              <h3 className='text-white fw-bold text-center'>Sign Up
                <div className='text-center'>
                  <small className='text-light fw-normal fs-6'>Already registered? Login</small>
                </div>
              </h3>
              <img className='shadow-lg rounded-circle' src={logo} width="60" alt="Logo" height="50" />
            </div>
            <Formik initialValues={{ username: "", email: "", address: "", ph: "", password: "", cpassword: "" }} validationSchema={validation}>
              <Form>
                <div className="modal-body">
                  <div className='row'>
                    {inputs.map((input) => {
                      return <Commonmodalform key={input.key} {...input} />
                    })}
                  </div>
                  <div className='text-center mt-0'>
                    <button type='submit' className='btn  btn-primary text-dark fw-bold'>Submit <span className='fa fa-paint-brush text-light'></span></button>
                  </div>
                </div>
              </Form>
            </Formik>
            <hr></hr>
            <div className='row p-1'>
              <div className='col-sm-2'>
                &nbsp;
              </div>
              <div className='col-sm-4 text-center my-2'>
                <button className='btn btn-outline-primary'><i className='fab fa-google mx-1'></i>Sign up with Google</button>
              </div>
              <div className='col-sm-4 text-center my-2'>
                <button className='btn btn-outline-primary'><i className='fab fa-facebook mx-1'></i>Sign up with Facebook</button>
              </div>
              <div className='col-sm-2'>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
