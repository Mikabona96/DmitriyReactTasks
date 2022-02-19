// Core
import React from 'react';

export const MyTextInput = ({label, meta, ...props}) => (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...props} />
      {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
      )}
    </>
);
