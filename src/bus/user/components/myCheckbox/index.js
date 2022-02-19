// Core
import React from 'react';

export const MyCheckbox = ({children, meta, ...props}) => (
  <>
    <label className="checkbox">
      <input {...props} type='checkbox' />
      {children}
    </label>
    {meta.touched && meta.error && (
      <div className="error">{meta.error}</div>
    )}
  </>
);
