import React, { FC } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
const regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
export const StudentRegistration: FC = () => {
    const validationsSchema = yup.object({
        firstName: yup.string().typeError('firstname shold be a string')
            .required('Firstname is required'),
        surname: yup.string().typeError('surname shold be a string')
            .required('surname is required'),
        age: yup.number().min(6)
            .max(60),
        email: yup.string()
            .email('enter valid email')
            .matches(regex, 'enter valid email')
            .required('email is requiured'),
        sex: yup.string().typeError('sex should be a string')
            .required('sex is requiured'),
        speciality: yup.string().typeError('speciality should be a string')
            .required('speciality is requiured'),
    });

    type InitVals = {
        firstName: string;
        surname: string;
        age: string;
        email: string;
        sex: string;
        speciality: string;
    }
    const initVals: InitVals = {
        firstName:  '',
        surname:    '',
        age:        '',
        email:      '',
        sex:        '',
        speciality: '',
    };

    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                validateOnBlur
                initialValues = { initVals }
                validationSchema = { validationsSchema }
                onSubmit = { (values) => {
                    dispatch({ type: 'UPLOAD_STUDENT_PROFILE', payload: values });
                } }>
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => {
                    return (
                        <div>
                            <p>
                                <label htmlFor = 'firstName'>firstName</label> <br/>
                                <input
                                    name = 'firstName'
                                    type = 'text'
                                    value = { values.firstName }
                                    onBlur = { handleBlur }
                                    onChange = { handleChange }
                                />
                            </p>
                            {touched.firstName && errors.firstName && <p className = 'error'>{errors.firstName}</p>}

                            <p>
                                <label htmlFor = 'surname'>surname</label> <br/>
                                <input
                                    name = 'surname'
                                    type = 'text'
                                    value = { values.surname }
                                    onBlur = { handleBlur }
                                    onChange = { handleChange }
                                />
                            </p>
                            {touched.surname && errors.surname && <p className = 'error'>{errors.surname}</p>}

                            <p>
                                <label htmlFor = 'age'>age</label> <br/>
                                <input
                                    name = 'age'
                                    type = 'number'
                                    value = { values.age }
                                    onBlur = { handleBlur }
                                    onChange = { handleChange }
                                />
                            </p>
                            {touched.age && errors.age && <p className = 'error'>{errors.age}</p>}

                            <p>
                                <label htmlFor = 'email'>email</label> <br/>
                                <input
                                    name = 'email'
                                    type = 'email'
                                    value = { values.email }
                                    onBlur = { handleBlur }
                                    onChange = { handleChange }
                                />
                            </p>
                            {touched.email && errors.email && <p className = 'error'>{errors.email}</p>}

                            <p>
                                <label>
                                    sex <br />
                                    <label>
                                        Male:
                                        <Field
                                            name = 'sex'
                                            type = 'radio'
                                            value = 'Male'
                                        />
                                    </label>


                                    <label>
                                        Female:
                                        <Field
                                            name = 'sex'
                                            type = 'radio'
                                            value = 'Female'
                                        />
                                    </label>
                                </label> <br/>
                            </p>
                            {touched.sex && errors.sex && <p className = 'error'>{errors.sex}</p>}

                            <p>
                                <label htmlFor = 'speciality'>speciality</label> <br/>
                                <select
                                    name = 'speciality'
                                    value = { values.speciality }
                                    onBlur = { handleBlur }
                                    onChange = { handleChange }>

                                    <option value = ''>Select speciality</option>
                                    <option value = 'developer'>Develoiper</option>
                                    <option value = 'designer'>Designer</option>
                                    <option value = 'writer'>Writer</option>

                                </select>
                            </p>
                            {touched.speciality && errors.speciality && <p className = 'error'>{errors.speciality}</p>}

                            <button
                                disabled = { !isValid && !dirty }
                                type = 'submit'
                                onClick = { () => handleSubmit() }>Send
                            </button>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
};
