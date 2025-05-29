import { useContext, useState } from "react";
import {Form_Input} from "../../components/Forminput/form_input";
import { createUseDocumentFromAuth, CreateUserWithemailpassword, signInWithGooglePopup} from "../../utils/firebase/fireconfig"; // CreateUserWithemailpassword // createUseDocumentFromAuth
import './singup_jsx.scss'
import Button from "../../components/button/Button";
import { user_info_context } from "../../components/context/userContext";
// const default_form = {
//     displayName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   }
// export const SingUp =()=>{

//     const [form, setForm] = useState(default_form);
//       const {displayName,email,password,confirmPassword} =  form
//     // console.log(displayName)
//       const [error, setError] = useState('');
    
//       const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
    
//       };
//       const SingInWithPoPup =  async ()=> {
//               const {user}  = await signInWithGooglePopup();
//               // console.log(user.uid);
//               const user_  = await createUseDocumentFromAuth(user);
//               console.log(user_);
//           }
    
//       function reset(){
       
//         setForm(default_form)
//       }
    
//       const handleSubmit = async (e) => {
//          e.preventDefault();
//           console.log("this is running");
//         if (form.password !== form.confirmPassword) {
//           setError('Passwords do not match');
//           return;
//         }
//         // const user=null;
        
//         try{
//             const user = await CreateUserWithemailpassword(form.email,form.password);
//           // console.log(user);
//           const created_user =  await createUseDocumentFromAuth( user, {displayName});
//             console.log(created_user)
          
          
//           // reset();
//         }
//         catch(errors){
//           console.log(error.code)
//           if (errors.code ==='auth/email-already-in-use'){
//             console.log("user already exeist")
//           }
//           // console.log('error: user did not return');
//         }
       
//         // try{
           
          
//         //   }catch(error){
//         //     console.log(error.code);
//         //     console.log("Error while  creating user ")
//         //   }
    
//         setError('');
//         console.log('Form submitted:', form);
//         // Call Firebase or API to register user here 
    
//       };
//     return (
//         <div>
//         <form>
//             <Form_Input  label='Name'
//           type='text'
//           required
//           onChange={handleChange}
//           name='displayName'
//           value={displayName}></Form_Input>
//            <Form_Input  label='Email'
//           type='email'
//           required
//           onChange={handleChange}
//           name='email'
//           value={email}></Form_Input>

//            <Form_Input  label='Password'
//           type='password'
//           required
//           onChange={handleChange}
//           name='password'
//           value={password}></Form_Input>

//            <Form_Input  label='Confirm Password'
//           type='password'
//           required
//           onChange={handleChange}
//           name='confirmPassword'
//           value={confirmPassword}></Form_Input>
//           <Button type='submit' onClick={handleSubmit} >Sing Up</Button>

         
//         </form>
//         <Button
//             // buttonType={BUTTON_TYPE_CLASSES.google}
//             type='button'
//             onClick={SingInWithPoPup}
//           >
//             Sing Up with Google
//           </Button>
//         </div>
//     )
// }




const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SingUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
        
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await CreateUserWithemailpassword(
        email,
        password
      );

      await createUseDocumentFromAuth(user, { displayName });
      resetFormFields();
      

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Form_Input
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <Form_Input
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>

      {/* <Button type='button' buttonType='google' onClick={async ()=> await signInWithGooglePopup() }> signInWithGooglePopup</Button> */}
    </div>
  );
};

