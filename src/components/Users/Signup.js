import React, { useContext, useRef, useState } from 'react';
import logo from '../../image/gpartworklogo.png';
import Commonmodalform from './Commonmodalform';
import { Formik, Form as Form1 } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { UserAuthContext } from '../../context/UserAuthContext';
import swal from 'sweetalert';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../states';
import { useDispatch } from 'react-redux';


YupPassword(Yup);

const Signup = () => {

  const [submitText, setSubmitText] = useState({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
  const [file, setFile] = useState("");
  const [userphoto, setUserphoto] = useState("");

  const context = useContext(UserAuthContext);
  const { createUser, getUser } = context;
  const dispatch  = useDispatch();
  const {Login} = bindActionCreators(actionCreators,dispatch);


  {
    const inputs = [
      {
        key: 1,
        name: "username",
        required: "true",
        autoComplete: "off",
        type: "text",
        placeholder: "Enter your name......",
        className: "form-control bg-transparent border-primary  fw-normal  p-3 text-white",
        label: "Name",
        id: "floatingInput",

      },
      {
        key: 2,
        name: "address",
        required: "true",
        autoComplete: "off",
        type: "text",
        placeholder: "Enter your address......",
        className: "form-control bg-transparent border-primary  fw-normal p-3 text-white hideme",
        label: "Address",
        id: "floatingInput2",

      },
      {
        key: 3,
        name: "email",
        required: "true",
        autoComplete: "off",
        type: "text",
        placeholder: "Enter your Email ID......",
        className: "form-control bg-transparent border-primary  fw-normal p-3 text-white",
        label: "Email ID",
        id: "floatingInput3",

      },
      {
        key: 4,
        name: "ph",
        required: "true",
        autoComplete: "off",
        type: "number",
        placeholder: "Enter your Phone number......",
        className: "form-control bg-transparent border-primary  fw-normal p-3 text-white",
        label: "Ph No",
        id: "floatingInput4",

      },
      {
        key: 5,
        name: "password",
        required: "true",
        autoComplete: "off",
        type: "password",
        placeholder: "Enter Password......",
        className: "form-control bg-transparent border-primary  fw-normal p-3 text-white",
        label: "Password",
        id: "floatingInput5",

      },
      {
        key: 6,
        name: "cpassword",
        required: "true",
        autoComplete: "off",
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
      ph: Yup.string().required('Please enter your phone number').max(10, "Phone number cannot be more than 10 digits !!").min(10, "Phone number cannot be less than 10 digits !!"),
      password: Yup.string().required('Please enter password !!').max(14, 'Maximum character is 14 !!').min(8, 'Minimum character is 8').minLowercase(1, 'Need atleast one lowercase letter').minUppercase(1, 'Need atleast one uppercase letter').minSymbols(1, 'Need atleast one special character').minNumbers(1, 'Need atleast one number'),
      cpassword: Yup.string().required('Please re enter password !!').oneOf([Yup.ref("password"), null], "Password doesnot matched !!"),

    })

    const showAlert = (icon, title, text, button) => {
      swal({
        title: title,
        text: text,
        icon: icon,
        button: button,
      }).then(function () {

      });
    }

    const fileupload = (e) => {
      var filetype = e.target.files[0].name.split('.').pop();
      if (filetype === 'jpg' || filetype === 'jpeg' || filetype === 'png' || filetype === 'JPG' || filetype === 'JPEG' || filetype === 'PNG') {
        setFile(URL.createObjectURL(e.target.files[0]));
        setUserphoto(e.target.files[0]);
      }
      else {
        showAlert("error", "Error !", "Supported File JPEG, JPG and PNG only", "Close");
        setFile("");
        setUserphoto("");
      }
    }

    const handleSubmit = async (data, actions) => {

      try {
        setSubmitText({ text: "Please wait", disable: "disabled", icon: "fa fa-spinner fa-spin" })
        const response = await createUser(data.username, data.address, data.email, data.ph, data.password, data.cpassword, userphoto);

        if (response.status) {
          showAlert("success", "Successfully Registered", "Thanks for being a part of GP Artwork", "Close");
          setFile("");
          setUserphoto("");
          ref.current.click();
          localStorage.setItem('token', response.authtoken);
          const res = await getUser();
          if (res.status) {
            Login(res);
            actions.resetForm({
              values: { username: "", email: "", address: "", ph: "", password: "", cpassword: "" }
            })
          }
          else {
            var error = res.error;
            showAlert("error", "Error !!", error.toString(), "Close");
            setSubmitText({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
          }

        }
        else {
          var err = [];
          Array.isArray(response.error) ?
            response.error.map((value) => {
              return err.push(value.msg)
            })
            :
            err = response.error;

          showAlert("error", "Error !!", err.toString(), "Close");

        }
        setSubmitText({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
      } catch (err) {
        setSubmitText({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
      }
    }

    const ref = useRef();
    const closeSignup = () => {
      ref.current.click();
    }

    return (
      <div>
        <div className="modal fade" id="signupModal" tabIndex="-1" data-bs-backdrop="static">
          <div className="modal-dialog ">
            <div className="modal-content bg-dark-blue shadow-sm">
              <div className="modal-header my-0">
                <button className='btn btn-success btn-small rounded text-white' data-bs-dismiss="modal" aria-label="Close" ref={ref}><i className='fa fa-arrow-left'></i></button>
                <h3 className='text-white fw-bold text-center'>Sign Up
                  <div className='text-center btn' data-bs-toggle="modal" data-bs-target="#loginModal" onClick={closeSignup}>
                    <small className='text-light fw-normal fs-6'>Already registered? Login</small>
                  </div>
                </h3>
                {file === "" ? <img className='shadow-lg rounded-circle' src={logo} width="60" alt="Logo" height="50" /> : <img className='shadow-lg rounded-circle' src={file} width="60" alt="Logo" height="50" />}

              </div>

              <Formik initialValues={{ username: "", email: "", address: "", ph: "", password: "", cpassword: "" }} validationSchema={validation} onSubmit={handleSubmit} >
                <Form1 encType='multipart/form-data'>
                  <div className="modal-body">
                    <div className='row'>

                      {
                        inputs.map((input) => {
                          return <div className="col-sm-6" key={input.key} ><Commonmodalform key={input.key}  {...input} /> </div>
                        })
                      }

                    </div>


                    <div className='row mb-2'>
                      <div className='col-sm-12'>
                        <label className='text-small text-danger mb-1'>Choose Profile Picture (Optional)</label>
                        <div className='text-center'>
                          <input type="file" className='form-control bg-dark fileinput' onChange={fileupload} />
                        </div>
                      </div>
                    </div>
                    <div className='card bg-success mb-2'>
                      <div className='card-body content-align-justify p-0'>
                        <small className='text-dark fw-bold mx-1'>Note :</small><br />
                        <ul className='text-white fw-normal'>
                          <li><small >All the "<i className='fa fa-star text-light'></i>" marked fields are mendatory</small></li>
                          <li><small>Password  must be contained atleast one uppercase letter ,one lowercase letter, one special character, one number and neither be more than 14 characters nor less than 8 characters </small></li>
                          <li><small>File supported : JPEG, PNG</small></li>
                        </ul>
                      </div>
                    </div>

                    <div id="recaptcha-container"></div>

                    <div className='text-center'>
                      <button type='submit' className={`${submitText.disable} btn  btn-primary text-dark fw-bold`}>{submitText.text} <span className={`${submitText.icon} text-light`}></span></button>
                    </div>

                  </div>
                </Form1>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Signup
