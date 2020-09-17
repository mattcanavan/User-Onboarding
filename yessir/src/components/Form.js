import React from 'react'

export default function Form(props) {
    const { values, inputChange, submit } = props

    const onChange = event => {
        const { name, value, type, checked } = event.target
        
        const valueToUse = type === 'checkbox'? checked : value;  
        inputChange(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return (
        <form className='formContainer' onSubmit={onSubmit}>

            <label htmlFor='fnameInput'>Full Name</label>
            <input
                id='fnameInput'
                name='fname'
                type='text'
                placeholder='enter full name'
                value={values.fname}
                onChange={onChange}
            />
            <br />

            <label htmlFor='emailInput'>Email</label>
            <input
                id='emailInput'
                name='email'
                type='email'
                placeholder='enter email address'
                value={values.email}
                onChange={onChange}
            />
            <br />

            <label htmlFor='pwordInput'>Create Password</label>
            <input
                id='pwordInput'
                name='password'
                type='password'
                placeholder='create password'
                value={values.password}
                onChange={onChange}
            />
            <br />

            <label htmlFor='tosCheckbox'>Check box to agree to Terms of Service</label>
            <input
                id='tosCheckbox'
                name='tosCheckbox'
                type='checkbox'
                checked={values.tosCheckbox}
                onChange={onChange}
            />
            <br />

            <div className='submit'>
                <button>submit</button>
            </div>

        </form>
    )
}