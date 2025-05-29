import { Link, Outlet } from "react-router-dom";

import {Fragment, useContext} from 'react'
import {ReactComponent as Logo} from '../../assest/007 crown.svg'
import { user_info_context } from "../../components/context/userContext";
import { singOutHandlerOption } from "../../utils/firebase/fireconfig";
import CartIcon from "../../components/CartIcon/CartIcon";
import CardDropDown from "../../components/CartDropdown/CartDropdown";
import { DropDownContext } from "../../components/context/DropDown-context";
import {NavigationDiv,Logo_div,Link_container,Links} from "./navigation-styled.jsx";
const Navigation = () =>{
    const {currentUser,setcurrentUser} = useContext(user_info_context)
    const singOutHandler =async ()=>{ await singOutHandlerOption()
        setcurrentUser(null)


    }

    const {Droped,setDroped} = useContext(DropDownContext);
    return (
        
        <Fragment>
        
            <NavigationDiv>

           

            <Logo_div > 
                
                <Link className="logo-link" to='/'> <Logo/> </Link> 

            </Logo_div>

            <Link_container>
                {/* <Link className=" nav-link" to='/home'>
                    Shop
                </Link> */}
                <Links className=" nav-link" to='/singin'>
                    Login
                </Links>
                <Links className=" nav-link" to='/shop'>
                    Shop
                </Links>
                {currentUser ? (<Links as="span" className="nav-link" onClick={singOutHandler}>SingOut</Links>  ):(<Links className=" nav-link" to='/auth'>
                    Sing in 
                </Links>)}
                {currentUser ? ( <Links className=" nav-link" to='/checkout'>Checkout</Links> ):(<></>)}
                <CartIcon/>
                
            </Link_container>
            
            {Droped && (<CardDropDown/>)}

                    
            

            </NavigationDiv>

            <Outlet/>
        </Fragment>

    )


}

export default Navigation