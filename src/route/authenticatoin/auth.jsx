import { SingIN } from '../singin/singin_2';
import './auth.scss';
import { SingUp } from '../singup/sing_up';
export const Authentication = ()=>{
    return(
        <div className="authentication-container"> 
        <SingIN/>
        <SingUp/>
        </div>
    ) 
}