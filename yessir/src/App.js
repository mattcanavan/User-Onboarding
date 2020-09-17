import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import schema from './validation/formSchema'
import * as yup from 'yup'

//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initalFormValues = {
  fname: '',        //text input
  email: '',        //text input
  password: '',     //text input
  tosCheckbox: false, //checkbox
}

const initialFormErrors = {
  fname: '',        //text input
  email: '',        //text input
  password: '',     //text input
  tosCheckbox: false, //checkbox
}

const initialDisabled = true

function App() {
  const [formValues, setFormValues] = useState(initalFormValues)  //state to hold form values
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    //check values before updating state
    validate(name, value)
    //update state
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


    //////////////// HELPERS ////////////////
    const validate = (name, value) => {
      yup
        .reach(schema, name)
        // we can then run validate using the value
        .validate(value)
        // if the validation is successful, we can clear the error message
        .then(valid => { // eslint-disable-line
          setFormErrors({ ...formErrors, [name]: ""})
        })
        /* if the validation is unsuccessful, we can set the error message to the message 
          returned from yup (that we created in our schema) */
        .catch(err => {
          setFormErrors({ ...formErrors, [name]: err.errors[0]});
          console.log(err.errors)
        });
    }

    //////////////// SIDE EFFECT ////////////////
    useEffect(() => {
      /* Each time the form value state is updated, check to see if it is valid per our schema. 
      This will allow us to enable/disable the submit button.*/

      schema.isValid(formValues)
        .then(valid => { setDisabled(!valid) })
    }, [formValues])

  return (
    <div className="App">
      <div className='header'>
        <h1>New User Sign-up</h1>
        <Form
          values={formValues}
          inputChange={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </div>
    </div>
  );
}

export default App;
