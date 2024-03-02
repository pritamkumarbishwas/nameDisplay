import { useState } from 'react';
import './Form.css';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameChange = (event) => {
    const value = event.target.value.replace(/[^a-zA-Z ]/g, '');
    setFirstName(value.trim());
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value.replace(/[^a-zA-Z ]/g, '');
    setLastName(value.trim());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='container'>
      <div className='card'>
        <form onSubmit={handleFormSubmit}>
          <div className='col-sm-6'>
            {submitted && firstName !== '' && lastName !== '' ? (
              <h3>Full Name: {firstName} {lastName}</h3>
            ) : (
              <h3>Full Name Display</h3>
            )}
          </div>

          <div className='col-sm-6'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
          </div>

          <div className='col-sm-6'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' value={lastName} onChange={handleLastNameChange} />
          </div>

          <div className='col-sm-6'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
