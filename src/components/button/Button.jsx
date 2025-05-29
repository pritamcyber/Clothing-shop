import {Google_singin_button,Base_Button,Inverted_singin_button} from './button-style.jsx'



const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  base: "base"
};

const getButton = (buttonType= BUTTON_TYPE_CLASSES.base)=>
  ({
    [BUTTON_TYPE_CLASSES.base]: Base_Button,
    [BUTTON_TYPE_CLASSES.inverted] : Inverted_singin_button,

    [BUTTON_TYPE_CLASSES.google] : Google_singin_button


  }[buttonType])


const Button = ({ children, buttonType, ...otherProps }) => {

  const CustomeButton = getButton(buttonType);
  return (
    <CustomeButton {...otherProps}>{children}</CustomeButton>
  );
};  

export default Button;