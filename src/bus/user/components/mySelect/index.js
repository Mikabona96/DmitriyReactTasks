// Core
import React from 'react';

export const MySelect = ({label, meta, ...props}) => (
  <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <select {...props} />
    {meta.touched && meta.error && (
      <div className="error">{meta.error}</div>
    )}
  </>
);
