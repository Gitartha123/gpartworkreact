import React, { useRef } from 'react';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useSelector } from 'react-redux';
import Editbasicinfo from './Editbasicinfo';
import Changepassword from './Changepassword';
import Changeprofilepic from './Changeprofilepic';

YupPassword(Yup);

const Myprofile = () => {

  const loginReducers = useSelector(state => state.loginReducers);

  const ref = useRef();
  const closeMyprofile = () => {
    ref.current.click();
  }
  {
    return (
      <div>
        <div className="modal fade" id="myprofileModal" tabIndex="-1" data-bs-backdrop="static">
          <div className="modal-dialog ">
            <div className="modal-content bg-dark-blue shadow-sm">
              <div className="modal-header my-0">
                <button className='btn btn-success btn-small rounded text-white' data-bs-dismiss="modal" aria-label="Close" ref={ref}><i className='fa fa-arrow-left'></i></button>
                <h3 className='text-white fw-bold text-center'>My Profile</h3>
                <img className='shadow-lg rounded-circle btn'  src={`${process.env.REACT_APP_API_URL}/images/${loginReducers.userphoto}`} width="60" alt="Logo" height="50" data-bs-toggle="modal" data-bs-target="#change_profilepic" onClick={closeMyprofile}/>
              </div>

              <div className="modal-body">
                <div className='container border border-success rounded-3 p-2'>

                  <div className='row'>
                    <div className='col-sm-9 text-left'>
                      <h5 className='text-info fw-bold'><i className='text-white fa fa-user p-1'></i>Basic Info</h5>
                    </div>

                    <div className='col-sm-3 text-right'>
                      <h6 className='text-info btn btn-link text-small ' data-bs-toggle="modal" data-bs-target="#edit_basic_info_Modal" onClick={closeMyprofile}>Edit Basic Info<i className='text-info fa fa-pencil p-1'></i></h6>
                    </div>
                  </div>

                  <hr className='mt-0 text-success'></hr>
                  <div className='row'>
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
                </div>

                <hr></hr>

                <div className='container border border-success rounded-3 p-2'>

                  <div className='row'>
                    <div className='col-sm-9 text-left'>
                      <h5 className='text-info fw-bold'><i className='text-white fa fa-home p-1'></i>Saved Address</h5>
                    </div>
                    <div className='col-sm-3 text-right'>
                      <h6 className='text-info btn btn-link text-small ' data-bs-toggle="modal" data-bs-target="#edit_basic_info_Modal" onClick={closeMyprofile}>Add Address<i className='text-info fa fa-plus p-1'></i></h6>
                    </div>
                    {/* <div className='col-sm-3 text-right'>
                      <h6 className='text-info btn btn-link text-small ' data-bs-toggle="modal" data-bs-target="#edit_basic_info_Modal" onClick={closeMyprofile}>Edit Basic Info<i className='text-info fa fa-pencil p-1'></i></h6>
                    </div> */}
                  </div>

                  <hr className='mt-0 text-success'></hr>
                  <div className='row'>
                    <div className='col-sm-12 text-center'>
                      Address not saved
                    </div>

                  </div>
                </div>
                <hr className='mt-0 text-success'></hr>
                <div className='container border border-success rounded-3 p-2 mt-1'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <h6 className='text-info btn btn-link' data-bs-toggle="modal" data-bs-target="#change_password" onClick={closeMyprofile}><i className='fa fa-key' ></i> Change Password </h6>
                    </div>
                    <div className='col-sm-4'>
                      <h6 className='text-info link-info btn btn-link'><i className='fa fa-ban'></i> Deactivate account</h6>
                    </div>
                    <div className='col-sm-4'>
                      <h6 className='text-info link-info btn btn-link'><i className='fa fa-trash'></i> Delete account</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Editbasicinfo />
        <Changeprofilepic/>
        <Changepassword />
      </div>
    )

  }
}

export default Myprofile
