import { Link, Outlet } from "react-router-dom";

import {Fragment, useContext} from 'react'
import {ReactComponent as Logo} from '../../assest/007 crown.svg'
import { user_info_context } from "../../components/context/userContext";
import { singOutHandlerOption } from "../../utils/firebase/fireconfig";
import CartIcon from "../../components/CartIcon/CartIcon";
import CardDropDown from "../../components/CartDropdown/CartDropdown";
import { DropDownContext } from "../../components/context/DropDown-context";

const Navigation = () =>{
    const {currentUser,setcurrentUser} = useContext(user_info_context)
    const singOutHandler =async ()=>{ await singOutHandlerOption()
        setcurrentUser(null)


    }

    const {Droped,setDroped} = useContext(DropDownContext);
    return (
        
        <Fragment>
        
            <div className="Navigation  flex m-[10px] justify-between">

           

            <div className=" logo "> 
                
                <Link className="logo-link" to='/'> <Logo/> </Link> 

            </div>

            <div className=" links-container flex  gap-[20px]  ">
                {/* <Link className=" nav-link" to='/home'>
                    Shop
                </Link> */}
                <Link className=" nav-link" to='/singin'>
                    Login
                </Link>
                <Link className=" nav-link" to='/shop'>
                    Shop
                </Link>
                {currentUser ? (<span className="nav-link" onClick={singOutHandler}>SingOut</span>  ):(<Link className=" nav-link" to='/auth'>
                    Sing in 
                </Link>)}
                {currentUser ? ( <Link className=" nav-link" to='/checkout'>Checkout</Link> ):(<></>)}
                <CartIcon/>
                
            </div>
            
            {Droped && (<CardDropDown/>)}

                    
            

            </div>

            <Outlet/>
        </Fragment>

    )


}

export default Navigation