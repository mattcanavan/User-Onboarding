import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'

//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initalFormValues = {
  fname: '',        //text input
  email: '',        //text input
  password: '',     //text input
  tosCheckbox: false, //checkbox
}


function App() {
  const [formValues, setFormValues] = useState(initalFormValues)  //state to hold form values

  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newUser = {
      fullName: formValues.fname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tosCheckbox: formValues.tosCheckbox,
    }
    console.log("New User created: ", newUser)
    setFormValues(initalFormValues)
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>New User Sign-up</h1>
        <Form
          values={formValues}
          inputChange={inputChange}
          submit={formSubmit}
        />
      </div>
    </div>
  );
}

export default App;
