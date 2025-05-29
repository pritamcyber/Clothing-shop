import React, { useState } from 'react';
import './singup_jsx.scss';
import {signInWithGooglePopup,createUseDocumentFromAuth, authe,CreateUserWithemailpassword} from '../../utils/firebase/fireconfig'


const default_form = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
function Signup() {
  const [form, setForm] = useState(default_form);
  const {displayName,email,password,confirmPassword} =  form
// console.log(displayName)
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };

  function reset(){
   
    setForm(default_form)
  }

  const handleSubmit = async (e) => {
     e.preventDefault();
      console.log("this is running");
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // const user=null;
    
    try{
        const user = await CreateUserWithemailpassword(form.email,form.password);
      // console.log(user);
      const created_user =  await createUseDocumentFromAuth( user, {displayName});
        console.log(created_user)
      
      
      // reset();
    }
    catch(errors){
      console.log(error.code)
      if (errors.code ==='auth/email-already-in-use'){
        console.log("user already exeist")
      }
      // console.log('error: user did not return');
    }
   
    // try{
       
      
    //   }catch(error){
    //     console.log(error.code);
    //     console.log("Error while  creating user ")
    //   }

    setError('');
    console.log('Form submitted:', form);
    // Call Firebase or API to register user here 

  };

  return (

    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={form.displayName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Create Account</button>

<div style={styles.card}>
        <h3>Get User Auth</h3>
        <button style={styles.googleBtn} onClick={async ()=>  await signInWithGooglePopup() }>
          Sign in with Google
        </button>
      </div>
      </form>

      {/* <div style={styles.container}> */}
      
      {/* </div> */}
    </div>
  );
}


const styles = {
  container: {
    // height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f1f5f9',
  },
  card: {
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  googleBtn: {
    padding: '10px 20px',
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};



export default Signup;
