import React from 'react';
import { useField,ErrorMessage } from 'formik';

const Commonmodalform = (props) => {
  const {label,id,...inputProps} = props;
  const [field] = useField(props);

  return (
    <div className='col-sm-6'>
        <div className="form-floating mb-3">
            <input {...field}  {...inputProps}  id={id} />
            <label htmlFor={id} className='text-light'>{label} : </label>      
            <small className='text-small text-danger font-weight-bold'><ErrorMessage name={field.name}></ErrorMessage></small>    
        </div>
        
    </div>
  )
}

export default Commonmodalform
