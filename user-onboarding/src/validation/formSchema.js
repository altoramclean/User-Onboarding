import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required("Enter First Name Here")
        .min(3, 'Name has to be 2 or more characters'),

    last_name: yup
        .string()
        .trim()
        .required("Enter Last Name Here")
        .min(3, 'Name has to be 2 or more characters'),
    
    email: yup
        .string()
        .email('Email is Required!')
        .required('Email is Required'),

    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Enter your PASSWORD HERE (must be 6 or more characters)'),

    terms: yup
    .boolean()
    .oneOf([true], "Must Accept the Terms of Service"),


});

export default formSchema;