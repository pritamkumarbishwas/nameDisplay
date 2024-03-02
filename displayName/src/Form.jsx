import { useEffect, useState } from 'react';
import './Form.css';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (firstName !== '' && lastName !== '') {
      setSubmitted(true);
    }
  }, [firstName, lastName]);

  return (
    <div className='container'>
      <div className='card'>
        <form onSubmit={handleFormSubmit}>
          <div className='col-sm-6'>
            {/* Simplified conditional rendering for the full name */}
            <h3>Full Name: {submitted ? `${firstName} ${lastName}` : ''}</h3>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
          </div>

          <div className='col-sm-6'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' value={lastName} onChange={handleLastNameChange} required />
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
