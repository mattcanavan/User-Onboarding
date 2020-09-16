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
  setFormValues({ ...formValues, [name]: value})
}

  return (
    <div className="App">
      <div className='header'>
        <h1>New User Sign-up</h1>
        <Form  
        values={formValues}
        inputChange={inputChange}
        />
        </div>
    </div>
  );
}

export default App;
