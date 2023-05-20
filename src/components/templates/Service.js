import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import logo from '../../image/dibujo.png';
import { Formik, Form as Form1 } from 'formik';

YupPassword(Yup);

const Service = () => {

    const loginReducers = useSelector(state => state.loginReducers);
    const getFirstname = (fullname) => {
        return fullname.split(' ')[0];
    }

    const [display, setDisplay] = useState("orderform");
    const initialvalues = { paper: "",package:"",portrait_type:"",target_date:"", state: "", district: "", pin: "", address: "", ph: "" };
    const validation = Yup.object({
        paper: Yup.string().required('Please select paper size !!!'),
        package:Yup.string().required('Please select package !!!'),
        portrait_type:Yup.string().required('Please select portrait !!!'),
        target_date:Yup.date().required('Please select target date !!!').test('is-after-reference-date', 'Minimum target date should not be less than 14 days from today', function (value) {
            const referenceDate = new Date();
            referenceDate.setHours(0, 0, 0, 0); // Set time to midnight to ignore the time component
            const fourteenDaysAfterReferenceDate = new Date(referenceDate);
            fourteenDaysAfterReferenceDate.setDate(referenceDate.getDate() + 14);
            return value && value.getTime() >= fourteenDaysAfterReferenceDate.getTime();}),
        state: Yup.string().required('Please select state !!!'),
        district: Yup.string().required('Please select district !!!'),
        pin: Yup.number('Please enter number only !!!').min(6, 'Please enter 6 disits pincode !!!').max(6, 'Please enter 6 digits pincode'),
        address: Yup.string().required('Please enter your delivered address !!!').max(100, 'Maximum 100 characters are allowed !!!'),
        ph: Yup.number('Please enter numbers only !!!').required('Please enter your phone number !!!').max(10, 'Phone number should be 10 digits !!!').min(10, 'Phone number should be 10 digits !!!')
    })
    const [submitText, setSubmitText] = useState({ text: "Submit", disable: "", icon: "fa fa-paint-brush" })
    return (
        <div>


            <div className="modal fade" id="serviceModal" tabIndex="-1" data-bs-backdrop="static">
                <div className="modal-dialog ">
                    <div className="modal-content bg-dark-blue shadow-sm">
                        <div className="modal-header my-0">
                            <button className='btn btn-success btn-small rounded text-white' data-bs-dismiss="modal" aria-label="Close"><i className='fa fa-arrow-left'></i></button>
                            <h3 className='text-white fw-bold text-center'><span className='text-orange'>Hii</span> {getFirstname(loginReducers.name)}</h3>
                            <img src={logo} width="60" alt="Logo" height="50" />
                        </div>


                        <Formik initialValues={initialvalues} validationSchema={validation}>
                            {(formik) => {
                                const { values, handleChange, errors } = formik;
                                
                                return (
                                    <Form1>
                                        <div className="modal-body">
                                            <div className='container border border-success rounded-3 p-2'>
                                                <section style={{ display: display === 'orderform' ? 'block' : 'none' }} >
                                                    <div className='row'>
                                                        <div className='col-sm-9 text-left'>
                                                            <h5 className='text-info fw-bold'><i className='text-white'></i>Order Details</h5>
                                                        </div>

                                                    </div>

                                                    <hr className='mt-0 text-success'></hr>
                                                    <p></p>
                                                    <div className='row'>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Paper size:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <select name='paper' autoComplete='off' value={values.paper}  className='form-control bg-transparent border-primary  fw-normal text-white' onChange={handleChange}>
                                                                <option disabled value="">Select Paper</option>
                                                                <option>A4</option>
                                                                <option>A3</option>
                                                            </select>
                                                            <span className='text-danger'>{errors.paper}</span>

                                                        </div>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Package :</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <select name='package' autoComplete='off' value={values.package}  className='form-control bg-transparent border-primary  fw-normal text-white' onChange={handleChange}>
                                                                <option disabled value="">Select Package</option>
                                                                <option>Portrait with pencil</option>
                                                                <option>Portrait with color pencil</option>
                                                                <option>Portrait with water color</option>
                                                            </select>
                                                            <span className='text-danger'>{errors.package}</span>

                                                        </div>

                                                    </div>
                                                    <p></p>
                                                    <div className='row'>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Portrait type:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <select name='portrait_type' autoComplete='off' value={values.portrait_type}  className='form-control bg-transparent border-primary  fw-normal text-white' onChange={handleChange}>
                                                                <option disabled value="">Select Portrait Type</option>
                                                                <option>Single (No. of  person: 1)</option>
                                                                <option>Dual (No. of person: 2)</option>
                                                            </select>
                                                            <span className='text-danger'>{errors.portrait_type}</span>
                                                        </div>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Price:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <input type='text' readOnly name='price' placeholder='Enter pin code' value={values.price} className='form-control bg-transparent border-primary  fw-normal text-white' onChange={handleChange} autoComplete='off' />
                                                            <span className='text-danger'>{errors.price}</span>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className='row'>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Target Date:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <input type='date' onChange={handleChange} name='target_date' value={values.target_date} placeholder='Enter pin code'  className='form-control bg-transparent border-primary  fw-normal text-white'  autoComplete='off' />
                                                            <span className='text-danger text-small'>{errors.target_date}</span>
                                                        </div>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Upload Photo:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <input type='file'/>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section style={{ display: display === 'orderform' ? 'none' : 'block' }} >
                                                    <div className='row'>
                                                        <div className='col-sm-9 text-left'>
                                                            <h5 className='text-info fw-bold'><i className='text-white fas fa-shipping-fast p-1'></i>Contact and Address details to be delivered</h5>
                                                        </div>

                                                    </div>

                                                    <hr className='mt-0 text-success'></hr>
                                                    <div className='row'>

                                                        <p></p>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Name:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <h6 className='text-light'>{loginReducers.name}</h6>
                                                        </div>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Email ID:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <h6 className='text-light'>{loginReducers.email}</h6>
                                                        </div>

                                                    </div>
                                                    <p></p>
                                                    <div className='row'>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Ph No:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <input type='number' name='ph' placeholder='Enter phone number' value={values.ph} className='form-control bg-transparent border-primary  fw-normal text-white' onChange={handleChange} autoComplete='off' />
                                                            <span className='text-danger'>{errors.ph}</span>

                                                        </div>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>State:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <select name='state' autoComplete='off' value={values.state} className='form-control bg-transparent border-primary  fw-normal text-white' onChange={handleChange}>
                                                                <option disabled value="">Select State</option>
                                                                <option>Assam</option>
                                                            </select>
                                                            <span className='text-danger'>{errors.state}</span>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className='row'>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>District:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <select name='district' autoComplete='off' value={values.district} className='form-control bg-transparent border-primary  fw-normal text-white' onChange={handleChange}>
                                                                <option disabled value="">Select District</option>
                                                                <option>Jorhat</option>
                                                                <option>Golaghat</option>
                                                                <option>Kamrup(M)</option>
                                                            </select>
                                                            <span className='text-danger'>{errors.district}</span>
                                                        </div>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Pin code:</h6>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <input type='number' name='pin' placeholder='Enter pin code' value={values.pin} className='form-control bg-transparent border-primary  fw-normal text-white' onChange={handleChange} autoComplete='off' />
                                                            <span className='text-danger'>{errors.pin}</span>
                                                        </div>
                                                    </div>
                                                    <p></p>
                                                    <div className='row'>
                                                        <div className='col-sm-2'>
                                                            <h6 className='text-orange'>Address:</h6>
                                                        </div>
                                                        <div className='col-sm-10'>
                                                            <textarea name='address' placeholder='Address' value={values.ph} className='form-control bg-transparent border-primary  fw-normal text-white' onChange={handleChange} autoComplete='off' />
                                                            <span className='text-danger'>{errors.address}</span>
                                                        </div>
                                                    </div>
                                                </section>

                                            </div>

                                        </div>
                                    </Form1>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Service
