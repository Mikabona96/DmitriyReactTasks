// Core
import React from 'react';
import { useFormik } from 'formik';

// Styles
import './styles.scss';

// Form Elements
import { MyTextInput } from '../myTextInput';
import { MyCheckbox } from '../myCheckbox';
import { MySelect } from '../mySelect';

// Initial values for out Form
import { initialValues } from './initialValues';

// Schemas
import { validationSchema } from './validationSchema';
import { useUser } from '../../hooks/useUser';

export const Signup = () => {
  const {fillUser} = useUser();

  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    isValid
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: fillUser
  });

  return (
    <section>
      <h1>Subscribe!</h1>
      <form onSubmit={handleSubmit}>
        <MyTextInput
          label='First Name'
          name='firstName'
          type='text'
          placeholder='Put your name here'
          meta={getFieldMeta('firstName')}
          {...getFieldProps('firstName')}
        />
        <MyTextInput
          label='Last Name'
          name='lastName'
          type='text'
          placeholder='Put your last name here'
          meta={getFieldMeta('lastName')}
          {...getFieldProps('lastName')}
        />
        <MyTextInput
          label='Email Address'
          name='email'
          type='email'
          placeholder='Put your email here'
          meta={getFieldMeta('email')}
          {...getFieldProps('email')}
        />
        <MySelect
          label="Job Type"
          name="jobType"
          meta={getFieldMeta('jobType')}
          {...getFieldProps('jobType')}
        >
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
          <option value="other">Other</option>
        </MySelect>
        <MyCheckbox
          name="acceptedTerms"
          meta={getFieldMeta('acceptedTerms')}
          {...getFieldProps('acceptedTerms')}
        >
          I accept the terms and conditions
        </MyCheckbox>

        <button type="submit" disabled={!isValid}>Submit</button>
      </form>
    </section>
  )
};
