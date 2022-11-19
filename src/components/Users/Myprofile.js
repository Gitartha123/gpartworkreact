import React, { useRef } from 'react';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

import { useSelector } from 'react-redux';
import Editbasicinfo from './Editbasicinfo';
import Editcontactinfo from './Editcontactinfo';
import Changepassword from './Changepassword';

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
                <img className='shadow-lg rounded-circle' src={`http://localhost:5000/images/${loginReducers.userphoto}`} width="60" alt="Logo" height="50" />
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
                      <h6 className='text-orange'>Address:</h6>
                    </div>
                    <div className='col-sm-4'>
                      <h6 className='text-light'>{loginReducers.address}</h6>
                    </div>
                  </div>
                </div>
                <div className='container border border-success rounded-3 p-2 mt-1'>

                  <div className='row'>
                    <div className='col-sm-9 text-left'>
                      <h5 className='text-info fw-bold'><i className='text-white fa fa-phone p-1'></i>Contact Info</h5>
                    </div>

                    <div className='col-sm-3 text-right'>
                      <h6 className='text-info btn btn-link text-small' data-bs-target="#edit_contact_info_Modal" data-bs-toggle="modal" onClick={closeMyprofile}>Edit Contact Info<i className='text-info fa fa-pencil p-1'></i></h6>
                    </div>
                  </div>

                  <hr className='mt-0 text-success'></hr>
                  <div className='row'>
                    <div className='col-sm-2'>
                      <h6 className='text-orange'>Phone No :</h6>
                    </div>
                    <div className='col-sm-4'>
                      <h6 className='text-light'>{loginReducers.ph}</h6>
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
        <Editbasicinfo/>
        <Editcontactinfo/>
        <Changepassword/>
      </div>
    )

  }
}

export default Myprofile
