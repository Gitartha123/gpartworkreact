import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../states';
import { useSelector } from 'react-redux/es/exports';



const Commonmodalform = (props) => {
  const { label, id, required, name,...inputProps } = props;
  const [field] = useField(props);
  const dispatch = useDispatch();
  const { passwordHideandSeek, cpasswordHideandSeek } = bindActionCreators(actionCreators, dispatch);
  const passwordreducers = useSelector(state => state.passwordreducers);

  return (

    <div className="form-floating mb-3">
      <input {...field}  {...inputProps} id={id}/>
      <label htmlFor={id}>{label}{required ? <sup className='text-danger'><small><i className='fa fa-star'></i></small></sup> : ""} </label>
      {name === 'password' ?
        <span onClick={() => { passwordHideandSeek(id) }} className={`${passwordreducers.ispassword === false ? 'fa fa-eye-slash' : 'fa fa-eye'}`} style={{ "marginTop": "-9%", "marginLeft": "90%", "position": "absolute", "cursor": "pointer" }}></span>
        : ""
      }
      {name === 'cpassword' ?
        <span onClick={() => { cpasswordHideandSeek(id) }} className={`${passwordreducers.iscpassword === false ? 'fa fa-eye-slash' : 'fa fa-eye'}`} style={{ "marginTop": "-9%", "marginLeft": "90%", "position": "absolute", "cursor": "pointer" }}></span>
        : ""
      }
      <small className='text-small text-danger font-weight-bold'><ErrorMessage name={field.name}></ErrorMessage></small>
    </div>

  )
}

export default Commonmodalform
