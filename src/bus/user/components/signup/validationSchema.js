// Core
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Should be not empty'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Should be not empty'),
  email: Yup.string()
    .email('Should be valid email')
    .required('Should be not empty'),
  acceptedTerms: Yup.boolean()
    .oneOf([true], 'You should accept the terms and conditions'),
  jobType: Yup.string()
    .required('Should be not empty')
    .oneOf(['designer', 'developer', 'other'], 'You should put correct job'),
});
