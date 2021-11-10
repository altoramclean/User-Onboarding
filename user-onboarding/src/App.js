import './App.css';
import Form from './Form';
import axios from 'axios';
import React, {useState, useEffect} from 'react';



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
  axios.post ('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([newUser, ...users]);
    }) .catch(err => {
      console.error(err);
    }).finally(() => {
      setFormValues(initialFormValues);
    })
}















  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
