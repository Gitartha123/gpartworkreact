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

const Changeprofilepic = () => {

    const [submitText, setSubmitText] = useState({ text: "Chnage Profile Picture", disable: "", icon: "fa fa-paint-brush" });
    const loginReducers = useSelector(state => state.loginReducers);
    const [userphoto, setUserphoto] = useState("");
    const [file, setFile] = useState("");
    const context = useContext(UserAuthContext);
    const { changeprofilepic } = context;
    const ref = useRef();
    const formikRef = useRef();
    const closeChangepassword = () => {
        formikRef.current?.resetForm();
        setFile("");
        setUserphoto("");
        ref.current.click();
    }
    const dispatch = useDispatch();
    const { Login } = bindActionCreators(actionCreators, dispatch);



    const handleSubmit = async () => {

        const response = await changeprofilepic({ userphoto: userphoto });
        try {
            setSubmitText({ text: "Uploading, Please wait...", disable: "disabled", icon: "fa fa-spinner fa-spin" })
            if (response.status) {
                showAlert('success', 'Profile picture Changed Successfully', '', 'Close');
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

    return (
        <div>
            <div className="modal fade" id="change_profilepic" tabIndex="-1" data-bs-backdrop="static">
                <div className="modal-dialog " style={{ maxWidth: "500px" }}>
                    <div className="modal-content bg-dark-blue shadow-sm">
                        <div className="modal-header my-0">
                            <button className='btn btn-success btn-small rounded text-white' data-bs-toggle="modal" data-bs-target="#myprofileModal" data-bs-dismiss="modal" aria-label="Close" ref={ref} onClick={closeChangepassword}><i className='fa fa-arrow-left'></i></button>
                            <h3 className='text-white fw-bold text-center'>My Profile</h3>
                            <img className='shadow-lg rounded-circle' src={`${process.env.REACT_APP_API_URL}/images/${loginReducers.userphoto}`} width="60" alt="Logo" height="50" />
                        </div>

                        <Formik innerRef={formikRef} enableReinitialize={true} initialValues={{ userphoto: userphoto }} onSubmit={handleSubmit} >
                            {(formik) => {

                                return (
                                    <Form1>
                                        <div className="modal-body">
                                            <div className='container border border-success rounded-3 p-2'>
                                                <input type="file" id="files" style={{ visibility: "hidden" }} className='form-control bg-dark fileinput' onChange={fileupload} />
                                                <div className='row p-2'>
                                                    <div className='col-sm-12 text-center'>
                                                        {file === "" ? <img className='shadow-lg rounded-circle' src={`${process.env.REACT_APP_API_URL}/images/${loginReducers.userphoto}`} width="160" alt="Logo" height="150" /> : <img className='shadow-lg rounded-circle' src={file} width="160" alt="Logo" height="150" />}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-center mt-2'>
                                                <div className='row'>
                                                    <div className='col-sm-6'>
                                                        <label htmlFor="files" className="btn btn-link  text-primary"><i className="fa fa-upload mx-2"></i>Change Profile Picture</label>
                                                    </div>
                                                    <div className='col-sm-6'>
                                                        <button type='submit' className={`${submitText.disable} btn  btn-primary text-dark fw-bold`}>Upload <span className={`${submitText.icon} text-light`}></span></button>
                                                    </div>
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

export default Changeprofilepic
