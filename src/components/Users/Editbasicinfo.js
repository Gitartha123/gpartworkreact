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

const Editbasicinfo = () => {

  const [submitText, setSubmitText] = useState({ text: "Update", disable: "", icon: "fa fa-paint-brush" });
  const loginReducers = useSelector(state => state.loginReducers);
  const context = useContext(UserAuthContext);
  const { updateBasicdetails } = context;
  const ref = useRef();
  const formikRef = useRef();
  const closeEditbasicInfo = () => {
    formikRef.current?.resetForm();
    ref.current.click();
  }
  const dispatch = useDispatch();
  const { Login } = bindActionCreators(actionCreators, dispatch);


  const validation = Yup.object({
    username: Yup.string().required('Please enter your name !!').max(100, 'Maximum character is 100 !!').min(3, 'Minimum character is 3 !!').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field !!"),
    email: Yup.string().required("Please enter email Id !!").email("Invalid email Id !!").max(100, "max character is 100 !!"),
  })

  const handleSubmit = async (data) => {
    const response = await updateBasicdetails(data);
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
      <div className="modal fade" id="edit_basic_info_Modal" tabIndex="-1" data-bs-backdrop="static">
        <div className="modal-dialog " style={{ maxWidth: "500px" }}>
          <div className="modal-content bg-dark-blue shadow-sm">
            <div className="modal-header my-0">
              <button className='btn btn-success btn-small rounded text-white' data-bs-toggle="modal" data-bs-target="#myprofileModal" data-bs-dismiss="modal" aria-label="Close" ref={ref} onClick={closeEditbasicInfo}><i className='fa fa-arrow-left'></i></button>
              <h3 className='text-white fw-bold text-center'>My Profile</h3>
              <img className='shadow-lg rounded-circle' src={`${process.env.REACT_APP_API_URL}/images/${loginReducers.userphoto}`} width="60" alt="Logo" height="50" />
            </div>

            <Formik innerRef={formikRef} enableReinitialize={true} initialValues={{ username: loginReducers.name, email: loginReducers.email }} validationSchema={validation} onSubmit={handleSubmit} >
              {(formik) => {
                const { values, handleChange, errors } = formik;
                return (
                  <Form1>
                    <div className="modal-body">
                      <div className='container border border-success rounded-3 p-2'>

                        <div className='row'>
                          <div className='col-sm-9 text-left'>
                            <h5 className='text-info fw-bold'><i className='text-white fa fa-pencil p-1'></i>Edit Basic Info</h5>
                          </div>
                        </div>

                        <hr className='mt-0 text-success'></hr>
                        <div className='row p-2'>
                          <div className='col-sm-2'>
                            <h6 className='text-orange'>Name:</h6>
                          </div>
                          <div className='col-sm-10'>
                            <input type="text" name='username' autoComplete='off' placeholder='Enter your name' value={values.username} onChange={handleChange} className="form-control bg-transparent border-primary  fw-normal text-white" />
                            <span className='text-danger'>{errors.username}</span>
                          </div>
                          <p></p>
                          <div className='col-sm-2'>
                            <h6 className='text-orange'>Email ID:</h6>
                          </div>
                          <div className='col-sm-10'>
                            <input type="text" name='email' autoComplete='off' placeholder='Enter your email ID' value={values.email} onChange={handleChange} className="form-control bg-transparent border-primary  fw-normal text-white" />
                            <span className='text-danger'>{errors.email}</span>
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

export default Editbasicinfo
