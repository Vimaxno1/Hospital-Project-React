import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, ...otherprops }) => (
  <input className="form-control" onChange={handleChange} {...otherprops} />
);

export default FormInput;
