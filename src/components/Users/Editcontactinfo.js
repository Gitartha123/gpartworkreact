import { Formik, Form as Form1 } from 'formik';
import React, { useContext, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';
import * as Yup from 'yup';
import { UserAuthContext } from '../../context/UserAuthContext';
import { actionCreators } from '../../states';

const Editcontactinfo = () => {
    const context = useContext(UserAuthContext);
    const { updateContactdetails } = context;
    const dispatch = useDispatch();
    const { Login } = bindActionCreators(actionCreators, dispatch);
    const [submitText, setSubmitText] = useState({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
    const loginReducers = useSelector(state => state.loginReducers);
    const ref = useRef();
    const formikRef = useRef();
    const closeEditcontactInfo = () => {
        formikRef.current?.resetForm();
        ref.current.click();
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
    const validation =
        Yup.object({
            email: Yup.string().required("Please enter email Id !!").email("Invalid email Id !!").max(100, "max character is 100 !!"),
            ph: Yup.string().required('Please enter your phone number').max(10, "Phone number cannot be more than 10 digits !!").min(10, "Phone number cannot be less than 10 digits !!")
        })


    const handleSubmit = async (data) => {
        const response = await updateContactdetails(data);
        try {
            setSubmitText({ text: "Updating, Please wait...", disable: "disabled", icon: "fa fa-spinner fa-spin" })
            if (response.status) {
                showAlert('success', 'Updated Successfully !!', '', 'Close');
                ref.current.click();
                Login(response);
                setSubmitText({ text: "Update", disable: "", icon: "fa fa-paint-brush" });
                formikRef.current?.resetForm();
            }
            else {
                var err = response.error;
                showAlert("error", "Error !!", err.toString(), "Close");
                setSubmitText({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
            }
        } catch (error) {
            var err = response.error;
            showAlert("error", "Error !!", err.toString(), "Close");
            setSubmitText({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
        }
    }
    return (
        <div>
            <div className="modal fade" id="edit_contact_info_Modal" tabIndex="-1" data-bs-backdrop="static">
                <div className="modal-dialog " style={{ maxWidth: "500px" }}>
                    <div className="modal-content bg-dark-blue shadow-sm">
                        <div className="modal-header my-0">
                            <button className='btn btn-success btn-small rounded text-white' data-bs-toggle="modal" data-bs-target="#myprofileModal" data-bs-dismiss="modal" aria-label="Close" ref={ref} onClick={closeEditcontactInfo}><i className='fa fa-arrow-left'></i></button>
                            <h3 className='text-white fw-bold text-center'>My Profile</h3>
                            <img className='shadow-lg rounded-circle' src={`http://localhost:5000/images/${loginReducers.userphoto}`} width="60" alt="Logo" height="50" />
                        </div>

                        <Formik innerRef={formikRef} enableReinitialize={true} initialValues={{ email: loginReducers.email, ph: loginReducers.ph }} validationSchema={validation} onSubmit={handleSubmit} >
                            {(formik) => {
                                const { values, handleChange, errors } = formik;
                                return (
                                    <Form1>
                                        <div className="modal-body">
                                            <div className='container border border-success rounded-3 p-2'>

                                                <div className='row'>
                                                    <div className='col-sm-9 text-left'>
                                                        <h5 className='text-info fw-bold'><i className='text-white fa fa-pencil p-1'></i>Edit Contact Info</h5>
                                                    </div>
                                                </div>

                                                <hr className='mt-0 text-success'></hr>
                                                <div className='row p-2'>
                                                    <div className='col-sm-3'>
                                                        <h6 className='text-orange'>Email ID:</h6>
                                                    </div>
                                                    <div className='col-sm-9'>
                                                        <input type="text" name='email' autoComplete='off' placeholder='Enter email ID ' value={values.email} onChange={handleChange} className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger'>{errors.email}</span>
                                                    </div>
                                                    <p></p>
                                                    <div className='col-sm-3'>
                                                        <h6 className='text-orange'>Phone no :</h6>
                                                    </div>
                                                    <div className='col-sm-9'>
                                                        <input type="text" name='ph' autoComplete='off' placeholder='Enter your phone number' value={values.ph} onChange={handleChange} className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger'>{errors.ph}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-center mt-2'>
                                                <button type='submit' className={`${submitText.disable} btn  btn-primary text-dark fw-bold`}>{submitText.text} <span className={`${submitText.icon} text-light`}></span></button>
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

export default Editcontactinfo
