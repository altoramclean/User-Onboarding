import React from 'react'

export default function Form(props) {
    const {
        values,
        change, 
        submit,
        disabled,
        errors
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();

        submit();
    }
    const onChange = evt => {
    const { name, value, type, checked} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
}


return (

<form className="form container" onSubmit={onSubmit}> 
        <div className='form-submit'>
        <h2>Add a User</h2>
        <button disabled = {disabled}>Submit</button>

<div className='errors'>

<div>{errors.first_name}</div>
<div>{errors.last_name}</div>
<div>{errors.email}</div>
<div>{errors.password}</div>
<div>{errors.terms}</div>


</div>

<div className = 'form-input'>
<h2> User Information</h2>

    
    <label>First Name
        <input
        value={values.first_name}
        onChange={onChange}
        name='first_name'
        type='text'
        />
     </label>
     <label>Last Name
        <input
        value={values.last_name}
        onChange={onChange}
        name='last_name'
        type='text'
        />
    </label>
    <label>Email
        <input
        value={values.email}
        onChange={onChange}
        name='email'
        type='email'
        />
     </label>
     <label>Password
         <input
        type="password"
        name="password"
        value={values.password}
         onChange={onChange}
        />
     </label>
     <label>Terms
        <input
        type="checkbox"
        name="terms"
        checked={values.terms}
        onChange={onChange}
        /> 
    </label> 
    </div>
</div>
</form> 

)
} 