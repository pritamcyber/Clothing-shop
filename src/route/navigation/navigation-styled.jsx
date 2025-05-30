import { Link } from 'react-router-dom'
import styled from 'styled-components'



export const NavigationDiv = styled.div`
 height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;` 

// export default NavigationDiv;

export const Logo_div = styled.div` 
    height: 100%;
    width: 70px;
    padding: 25px;`


export const  Link_container =  styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;`

export const Links = styled(Link)`
      padding: 10px 15px;
      cursor: pointer;`

// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }