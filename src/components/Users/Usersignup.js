import React, { useContext, useRef, useState } from 'react';
import logo from '../../image/dibujo.png';
import { Formik, Form as Form1 } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { UserAuthContext } from '../../context/UserAuthContext';
import swal from 'sweetalert';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../states';
import { useDispatch } from 'react-redux';


YupPassword(Yup);

const Usersignup = () => {

    const [submitText, setSubmitText] = useState({ text: "Submit", disable: "", icon: "fa fa-paint-brush" });
    const [file, setFile] = useState("");
    const [userphoto, setUserphoto] = useState("");

    const context = useContext(UserAuthContext);
    const { createUser, getUser } = context;
    const dispatch = useDispatch();
    const { Login } = bindActionCreators(actionCreators, dispatch);


    const validation = Yup.object({
        username: Yup.string().required('Please enter your name !!').max(100, 'Maximum character is 100 !!').min(3, 'Minimum character is 3 !!').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field !!"),
        state: Yup.string().required('Please select your state name !!'),
        district: Yup.string().required('Please select your district name !!'),
        city: Yup.string().required('Please  enter your city !!').max(100, 'Maximum character is 100 !!').min(3, 'Minimum character is 3 !!'),
        landmark: Yup.string().required('Please  enter landmark/House no./Street name !!').max(100, 'Maximum character is 100 !!').min(3, 'Minimum character is 3 !!'),
        pincode: Yup.string().required('Please enter your pincode').max(10, "Pincode number cannot be more than 6 digits !!").min(10, "Pincode number cannot be less than 6 digits !!"),
        email: Yup.string().required('Please enter your email ID !!').email('Invalid email ID !!').max(100, 'Maximum character is 100'),
        address: Yup.string().required('Please enter address !!').max(100, "Maximum character is 100"),
        ph: Yup.string().required('Please enter your phone number').max(6, "Phone number cannot be more than 10 digits !!").min(6, "Phone number cannot be less than 10 digits !!"),
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
                            {file === "" ? <img src={logo} width="60" alt="Logo" height="50" /> : <img className='shadow-lg rounded-circle' src={file} width="60" alt="Logo" height="50" />}

                        </div>

                        <Formik initialValues={{ username: "", state: "", district: "", city: "", landmark: "", pincode: "", email: "", ph: "", password: "", cpassword: "" }} validationSchema={validation} onSubmit={handleSubmit} >
                            {(formik) => {
                                const { values, handleChange, errors } = formik;
                                return (
                                    <Form1 encType='multipart/form-data' autoComplete='off'>
                                        <div className="modal-body">
                                            <div className='row'>
                                                <div className='col-sm-4'>

                                                    <div className="form-floating mb-3">
                                                        <input type="text" name='username' autoComplete='off' placeholder='Enter your name' value={values.username} onChange={handleChange} id="username" className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger text-small'>{errors.username}</span>
                                                        <label htmlFor="username">Name<sup className='text-danger'><small><i className='fa fa-star'></i></small></sup></label>
                                                    </div>
                                                </div>

                                                <div className='col-sm-4'>

                                                    <div className="form-floating mb-3">
                                                        <select id='state' className="form-control bg-transparent border-primary  fw-normal text-primary" name='state' autoComplete='off' onChange={handleChange}>
                                                            <option value='' selected disabled>Select State</option>
                                                            <option value="1"  >Assam</option>
                                                        </select>
                                                        <span className='text-danger text-small'>{errors.state}</span>
                                                        <label htmlFor="state">State Name<sup className='text-danger'><small><i className='fa fa-star'></i></small></sup></label>
                                                    </div>
                                                </div>

                                                <div className='col-sm-4'>

                                                    <div className="form-floating mb-3">
                                                        <select id='district' className="form-control bg-transparent border-primary  fw-normal text-primary" name='district' autoComplete='off' onChange={handleChange}>
                                                            <option value='' selected disabled>Select District</option>
                                                            <option value="1"  >Golaghat</option>
                                                            <option value="2">Kamrup (M)</option>
                                                        </select>
                                                        <span className='text-danger text-small'>{errors.district}</span>
                                                        <label htmlFor="district">District Name<sup className='text-danger'><small><i className='fa fa-star'></i></small></sup></label>
                                                    </div>
                                                </div>

                                                <div className='col-sm-4'>

                                                    <div className="form-floating mb-3">
                                                        <input type="text" name='city' autoComplete='off' placeholder='Enter your city' value={values.city} onChange={handleChange} id="city" className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger text-small'>{errors.city}</span>
                                                        <label htmlFor="city">City<sup className='text-danger'><small><i className='fa fa-star'></i></small></sup></label>
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>

                                                    <div className="form-floating mb-3">
                                                        <input type="text" name='landmark' autoComplete='off' placeholder='Enter landmark/House no./Street name' value={values.landmark} onChange={handleChange} id="landmark" className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger text-small'>{errors.landmark}</span>
                                                        <label htmlFor="landmark">Landmark/House No./Street Name<sup className='text-danger'><small><i className='fa fa-star'></i></small></sup></label>
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>

                                                    <div className="form-floating mb-3">
                                                        <input type="number" name='pincode' autoComplete='off' placeholder='Enter Pincode' value={values.pincode} onChange={handleChange} id="pincode" className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger text-small'>{errors.pincode}</span>
                                                        <label htmlFor="pincode">Pincode<sup className='text-danger'><small><i className='fa fa-star'></i></small></sup></label>
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>

                                                    <div className="form-floating mb-3">
                                                        <input type="text" name='email' autoComplete='off' placeholder='Enter Email ID' value={values.email} onChange={handleChange} id="email" className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger text-small'>{errors.email}</span>
                                                        <label htmlFor="email">Email ID<sup className='text-danger'><small><i className='fa fa-star'></i></small></sup></label>
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>

                                                    <div className="form-floating mb-3">
                                                        <input type="number" name='ph' autoComplete='off' placeholder='Enter Phone number' value={values.ph} onChange={handleChange} id="ph" className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                        <span className='text-danger text-small'>{errors.ph}</span>
                                                        <label htmlFor="ph">Phone no.<sup className='text-danger'><small><i className='fa fa-star'></i></small></sup></label>
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>

                                                    <div className='text-center'>
                                                        <div class="d-grid gap-2 mt-1">
                                                            <label for="files" class="btn btn-primary text-dark"><i className="fa fa-upload mx-2"></i>Upload profile picture</label>
                                                        </div>

                                                        <input type="file" id="files" style={{ visibility: "hidden" }} className='form-control bg-dark fileinput' onChange={fileupload} />
                                                    </div>
                                                </div>

                                                <div className='col-sm-6'>
                                                    <div className='row'>
                                                        <div className='col-sm-8'>

                                                            <div className="form-floating mb-3">
                                                                <input type="password" name='password' autoComplete='off' placeholder='Enter Password' value={values.password} onChange={handleChange} id="password" className="form-control bg-transparent border-primary  fw-normal text-white" />
                                                                <span className='text-danger text-small'>{errors.password}</span>
                                                                <label htmlFor="password">Password<sup className='text-danger'><small><i className='fa fa-star'></i></small></sup></label>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                                <i className='fa  fa-eye mt-2'></i>
                                                        </div>
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
                                )
                            }}

                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Usersignup
