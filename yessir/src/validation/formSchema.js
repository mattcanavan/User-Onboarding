import * as yup from 'yup'

export default yup.object().shape({
    fname: yup.string()
        .required('First and Last Name is required')
        .min(6, 'Full Name must be 6 chars or longer'),
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup.string()
        .required('A password is required')
        .min(8, 'Password must be 8 characters or more'),
    //checkboxes
    tosCheckbox: yup.boolean()
        .oneOf([true], 'Please agree to Terms of Service')
})