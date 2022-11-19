import React, { useContext, useRef, useState } from 'react';
import { Formik, Form as Form1, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { UserAuthContext } from '../../context/UserAuthContext';
import { actionCreators } from '../../states';
import { bindActionCreators } from 'redux';


YupPassword(Yup);

const Changepassword = () => {

    const [submitText, setSubmitText] = useState({ text: "Update", disable: "", icon: "fa fa-paint-brush" });
    const loginReducers = useSelector(state => state.loginReducers);
    const context = useContext(UserAuthContext);
    const { checkCurrentpassword } = context;
    const ref = useRef();
    const formikRef = useRef();
    const closeChangepassword = () => {
        formikRef.current?.resetForm();
        ref.current.click();
    }
    const dispatch = useDispatch();
    const { Login } = bindActionCreators(actionCreators, dispatch);


    const validation = Yup.object({
        currentpassword: Yup.string().required('Please enter old password !!'),
        newpassword: Yup.string().required('Please enter new password').max(14, 'Maximum character is 14 !!').min(8, 'Minimum character is 8').minLowercase(1, 'Need atleast one lowercase letter').minUppercase(1, 'Need atleast one uppercase letter').minSymbols(1, 'Need atleast one special character').minNumbers(1, 'Need atleast one number'),
        confirmpassword: Yup.string().required('Please re enter password !!').oneOf([Yup.ref("newpassword"), null], "Password doesnot matched !!"),
    })

    const handleSubmit = async (data) => {
        // const response = await updateBasicdetails(data);
        // try {
        //     setSubmitText({ text: "Updating, Please wait...", disable: "disabled", icon: "fa fa-spinner fa-spin" })
        //     if (response.status) {
        //         showAlert('success', 'Updated Successfully !!', '', 'Close');
        //         ref.current.click();
        //         Login(response);
        //         setSubmitText({ text: "Update", disable: "", icon: "fa fa-paint-brush" });
        //         formikRef.current?.resetForm();

        //     }
        //     else {
        //         var err = response.error;
        //         showAlert("error", "Error !!", err.toString(), "Close");
        //         setSubmitText({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
        //     }
        // } catch (error) {
        //     var err = response.error;
        //     showAlert("error", "Error !!", err.toString(), "Close");
        //     setSubmitText({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
        // }

    }
    const checkPassword = async (value)=>{
        const response = await checkCurrentpassword({currentpassword:value});
        return response.status;
    }


    const showAlert = (icon, title, text, button) => {
        swal({
            title: title,
            text: text,
            icon: icon,
            button: button,
        }).then(function () {

        });
    }



    return (
        <div>
            <div className="modal fade" id="change_password" tabIndex="-1" data-bs-backdrop="static">
                <div className="modal-dialog " style={{ maxWidth: "500px" }}>
                    <div className="modal-content bg-dark-blue shadow-sm">
                        <div className="modal-header my-0">
                            <button className='btn btn-success btn-small rounded text-white' data-bs-toggle="modal" data-bs-target="#myprofileModal" data-bs-dismiss="modal" aria-label="Close" ref={ref} onClick={closeChangepassword}><i className='fa fa-arrow-left'></i></button>
                            <h3 className='text-white fw-bold text-center'>My Profile</h3>
                            <img className='shadow-lg rounded-circle' src={`http://localhost:5000/images/${loginReducers.userphoto}`} width="60" alt="Logo" height="50" />
                        </div>

                        <Formik innerRef={formikRef} enableReinitialize={true} initialValues={{ currentpassword: "", newpassword: "", confirmpassword: "" }} validationSchema={validation} onSubmit={handleSubmit} >
                            {(formik) => {
                                const { handleChange, errors } = formik;
                               
                               
                                return (
                                    <Form1>
                                        <div className="modal-body">
                                            <div className='container border border-success rounded-3 p-2'>

                                                <div className='row'>
                                                    <div className='col-sm-9 text-left'>
                                                        <h5 className='text-info fw-bold'><i className='text-white fa fa-key p-1'></i>Change Password</h5>
                                                    </div>
                                                </div>

                                                <hr className='mt-0 text-success'></hr>
                                                <div className='row p-2'>
                                                    <div className='col-sm-3'>
                                                        <h6 className='text-orange'>Current Password:</h6>
                                                    </div>
                                                    <div className='col-sm-9'>
                                                        <input type="text" name='currentpassword' autoComplete='off' placeholder='Enter current password' onChange={handleChange} className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger'>{errors.currentpassword}</span>
                                                    </div>
                                                    <p></p>
                                                    <div className='col-sm-3'>
                                                        <h6 className='text-orange'>New Password:</h6>
                                                    </div>
                                                    <div className='col-sm-9'>
                                                        <input type="text" name='newpassword' autoComplete='off' placeholder='Enter new password' onChange={handleChange} className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger'>{errors.newpassword}</span>
                                                    </div>
                                                    <p></p>
                                                    <div className='col-sm-3'>
                                                        <h6 className='text-orange'>Re Enter Password:</h6>
                                                    </div>
                                                    <div className='col-sm-9'>
                                                        <input type="text" name='confirmpassword' autoComplete='off' placeholder='Re Enter password' onChange={handleChange} className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger'>{errors.confirmpassword}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-center mt-2'>
                                                <button type='submit' className={`${submitText.disable} btn  btn-primary text-dark fw-bold`}>{submitText.text} <span className={`${submitText.icon} text-light`}></span></button>
                                            </div>
                                            <div className='card bg-success mt-2'>
                                                <div className='card-body content-align-justify p-0'>
                                                    <small className='text-dark fw-bold mx-1'>Note :</small><br />
                                                    <ul className='text-white fw-normal'>
                                                        <li><small>Password  must be contained atleast one uppercase letter ,one lowercase letter, one special character, one number and neither be more than 14 characters nor less than 8 characters </small></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Form1>
                                )
                            }
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Changepassword
