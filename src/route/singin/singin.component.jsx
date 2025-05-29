

import { useEffect } from 'react';
// import {auth} from 'firebase.util'
import {signInWithGooglePopup,createUseDocumentFromAuth, authe} from '../../utils/firebase/fireconfig'
import { getAuth, getRedirectResult } from 'firebase/auth';

import Signup from '../singup/singup.jsx';
// SingIN
// const Singin  = () => {

//     // useEffect(async ()=>{
//     //     const response = await getRedirectResult(authe);

//     //     if (response){

//     //     const auth_user    = await createUseDocumentFromAuth(user);
//     //         console.log(auth_user)
             
//     //     }

//     // },[]) 

//     const SingInWithPoPup =  async ()=> {
//         const {user}  = await signInWithGooglePopup();
//         // console.log(user.uid);
//         const user_  = await createUseDocumentFromAuth(user);
//         console.log(user_);
//     }
//     return (
//             <>

//             <h1>this is singin </h1>

//             <button onClick={SingInWithPoPup}> Click for google sign up </button>
            
//             </>
//     )
// }
// export default Singin





import React, { useState } from 'react';
import { SingIN } from './singin_2.jsx';

const Singin = () => {
  const [formData , setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Optional: More email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError('Invalid email address');
      return;
    }

    setError('');
    console.log('Login Data:', formData);

    // Here you can send the formData to a backend via fetch or axios
  };

  return (

    <div style={styles.containeralfa}>
      
      <div style={styles.boxalfa}><Signup></Signup></div>;
   
     
    {/* <div style={styles.container}>

      

      <h2>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div> */}

    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
     </div>
  );
};

const styles = {
    containeralfa: {
    display: 'flex',         // makes children line up horizontally
    gap: '20px',             // spacing between components
    padding: '20px',
    justifyContent: 'center' // optional: center them
  },
  boxalfa: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '8px'
  },
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    display:'flex',
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputGroup: {
    marginBottom: '15px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  error: {
    color: 'red'
  },
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    color: '#555',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '12px',
    backgroundColor: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'center',
    fontSize: '14px'
  },
};

export default Singin;
