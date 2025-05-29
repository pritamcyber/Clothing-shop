import './style.scss' 
// import { useState } from 'react'

// useState

export const Form_Input =  ({label, ...otherProps})=>  {

    return(
        <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
    );
};
export  default Form_Input;