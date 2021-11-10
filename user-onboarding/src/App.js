import './App.css';
import Form from './Form';
import User from './Users';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import schema from './validation/formSchema';



const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false
}
const initialFormErrors = {
  first_name:'',
  last_name:'',
  email:'',
  terms:''
}

const initialUsers = []

const initialDisabled = true


function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        console.log(response)
        setUsers([response.data, ...users])
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([response.data, ...users])
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }
const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}
const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value 
  })
}
const formSubmit = () =>{
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    terms: formValues.terms
  } 
  postNewUser(newUser)
}
useEffect(() => {
  getUsers()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])



return (
  <div className="App">

    <header>
      <h1>New User App</h1>
    </header>
    
        <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}

          />

{users.map(item => {
            return(
                <User key={item.id} details={item}/>      
            )
          })}

    </div>

  );
}
export default App;