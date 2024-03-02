import { useEffect, useState } from 'react'
import './Form.css'

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handelFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const handelLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handelFormSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div className='container'>
        <div className='card'>
          <form onSubmit={handelFormSubmit}>
            <div className='col-sm-6'>
              {submitted && (firstName !== '' && lastName !== '') ? (
                <h3> Full Name: {firstName} {lastName}</h3>
              ) : (
                <h3>Full Name:</h3>
              )}


            </div>

            <div className='col-sm-6'>
              <label htmlFor="First Name">First Name</label>
              <input type="text" onChange={handelFirstNameChange} required />
            </div>

            <div className='col-sm-6'>
              <label htmlFor='Last Name'>Last Name</label>
              <input type='text' onChange={handelLastNameChange} required />
            </div>

            <div className='col-sm-6'>
              <button type='submit'>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Form
