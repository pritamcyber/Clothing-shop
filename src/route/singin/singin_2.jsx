// import React, { useState } from 'react';
// import Form_Input from '../../components/Forminput/form_input';
// import Button from '../../components/button/Button'; // Button // BUTTON_TYPE_CLASSES
import './singin_css.scss'; 
// import { createUseDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/fireconfig'; // signInWithGooglePopup // createUseDocumentFromAuth
// export const SingIN = ()=>{

//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//       });
    
//       const [error, setError] = useState('');
//     const SingInWithPoPup =  async ()=> {
//         const {user}  = await signInWithGooglePopup();
//         console.log(user.uid);
//         const user_  = await createUseDocumentFromAuth(user);
//         console.log(user_);
//     }
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(name,value)
//         setFormData((prev) => ({
//           ...prev,
//           [name]: value
//         }));
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
    
//         // Basic validation
//         if (!formData.email || !formData.password) {
//           setError('Please fill in all fields');
//           return;
//         }
    
//         // Optional: More email validation
//         const emailRegex = /\S+@\S+\.\S+/;
//         if (!emailRegex.test(formData.email)) {
//           setError('Invalid email address');
//           return;
//         }
    
//         setError('');
//         console.log('Login Data:', formData);
    
//         // Here you can send the formData to a backend via fetch or axios
//       };
//     return (
//         <div className='sign-in-container' >
          
//             <form action="">

//             <Form_Input 
//            label='Email'
//           type='email'
//           required
//           onChange={handleChange}
//           name='email'
//           value={formData.email}
//              />
//             <Form_Input 
//            label='Password'
//           type='password'
//           required
//           onChange={handleChange}
//           name='password'
//           value={formData.password}
//              />
//              <div className='buttons-container'>
//               <Button type='submit' onClick= {} >Sing In</Button>

//          <Button
//             buttonType={BUTTON_TYPE_CLASSES.google}
//             type='button'
//             onClick={SingInWithPoPup}
//           >
//             Sign In With Google
//           </Button>
//              </div>

           
//             <button type="submit"></button>
//         </form>
//         </div>
//     );
// }

import { useState } from 'react';

import Form_Input from '../../components/Forminput/form_input';
import Button from '../../components/button/Button';
import { useContext } from 'react';
import {
  
  signInAuthUserWithEmailAndPassword,createUseDocumentFromAuth, signInWithGooglePopup 
} from '../../utils/firebase/fireconfig';
import { user_info_context } from '../../components/context/userContext';

// import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

export  const SingIN = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
   
    
    
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
   


    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
     

    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Form_Input
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <Form_Input
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit' onClick={handleSubmit}>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

// export default SingIN;