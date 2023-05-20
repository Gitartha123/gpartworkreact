import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import logo from '../../image/dibujo.png';
import { Formik, Form as Form1 } from 'formik';
import Commonmodalform from './Commonmodalform';
import { useRef } from 'react';
import { UserAuthContext } from '../../context/UserAuthContext';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../states';

YupPassword(Yup);

const UserLogin = () => {
    const dispatch = useDispatch();
    const { Login } = bindActionCreators(actionCreators, dispatch);
    const [submitText, setSubmitText] = useState({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
    const context = useContext(UserAuthContext);
    const { login, getUser } = context;
    var loginwithoutOrder = useSelector(state=>state.loginwithoutOrder);
    

    const inputs = [
        {
            key: 1,
            name: "uname",
            required: "true",
            autoComplete: "off",
            type: "text",
            placeholder: "Enter registered email ID",
            className: "form-control bg-transparent border-primary  fw-normal  p-3 text-white",
            label: "Enter registered email ID",
            id: "floatingInput7"
        },
        {
            key: 2,
            name: "pw",
            required: "true",
            autoComplete: "off",
            type: "password",
            placeholder: "Enter Password......",
            className: "form-control bg-transparent border-primary  fw-normal p-3 text-white",
            label: "Password",
            id: "floatingInput8",
        }
    ]

    const ref = useRef();
    const serviceref = useRef();
    const closeLogin = () => {
        ref.current.click()
    }

    const validation = Yup.object({
        uname: Yup.string().required('Please enter your registered email ID  !!!'),
        pw: Yup.string().required('Please enter your password !!!')
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


    const handleSubmit = async (data, action) => {
       
        try {
            setSubmitText({ text: "Please wait", disable: "disabled", icon: "fa fa-spinner fa-spin" });
            const response = await login(data.uname, data.pw);

            if (response.status) {

                ref.current.click();
                localStorage.setItem('token', response.authtoken);
                const res = await getUser();
                if (res.status) {
                    Login(res);
                    action.resetForm({
                        values: { uname: "", pw: "" }
                    })

                    
                    (loginwithoutOrder.status?
                    serviceref.current.click():"")
                    
   
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
        } catch (error) {
            setSubmitText({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
        }
    }

    return (
        <div>
            <button type="button" style={{ display: "none" }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="loginModal">
                Launch demo modal
            </button>

            <a data-bs-toggle="modal" style={{ display: "none" }} data-bs-target="#serviceModal" ref={serviceref} className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-dark fw-bold ">Order now</a>
            <div className='row justify-content-md-center'>
                <div className='col-lg-12'>
                    <div className="modal fade" id="loginModal" tabIndex="-1" data-bs-backdrop="static">
                        <div className="modal-dialog " style={{ maxWidth: "400px" }}>
                            <div className="modal-content bg-dark-blue shadow-sm">
                                <div className="modal-header my-0">
                                    <button className='btn btn-success btn-small rounded text-white' data-bs-dismiss="modal" aria-label="Close" ref={ref}><i className='fa fa-arrow-left'></i></button>
                                    <h3 className='text-white fw-bold text-center'>Login
                                        <div className='text-center btn' onClick={closeLogin}>
                                            <small className='text-light fw-normal fs-6' data-bs-toggle="modal" data-bs-target="#signupModal">New User?Sign up</small>
                                        </div>
                                    </h3>
                                    <img src={logo} width="60" alt="Logo" height="50" />
                                </div>

                                <Formik initialValues={{ uname: "", pw: "" }} validationSchema={validation} onSubmit={handleSubmit}>
                                    <Form1>
                                        <div className="modal-body">
                                            <div className='row'>

                                                {
                                                    inputs.map((input) => {
                                                        return <div className="col-sm-12" key={input.key} ><Commonmodalform key={input.key} {...input} /> </div>
                                                    })
                                                }

                                            </div>

                                            <div className='text-center mt-2'>
                                                <button type='submit' className={`${submitText.disable} btn  btn-primary text-dark fw-bold`}>{submitText.text} <span className={`${submitText.icon} text-light`}></span></button>
                                            </div>

                                        </div>
                                    </Form1>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
