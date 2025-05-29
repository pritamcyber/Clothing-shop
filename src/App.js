import { Routes, Route } from "react-router-dom";
import Home from "./route/home/home.component";

import Shop from "./route/shop/shop.component";

import Navigation from "./route/navigation/navigation.component";

import Singin from "./route/singin/singin.component";
import { Authentication } from "./route/authenticatoin/auth";
import { SingIN } from "./route/singin/singin_2";
import { Checkout } from "./route/checkout/checkout-component";

const App = () => {
    return (


        <
        Routes >

        <
        Route path = ""
        element = { < Navigation / > } >
        <
        Route index element = { < Home / > }
        />  <
        Route path = "firebase"
        element = { < firebase / > } > < /Route>

        <
        Route path = "shop/*"
        element = { < Shop / > }
        />  <
        Route path = "checkout"
        element = { < Checkout / > }
        /> 

        <
        Route path = "singin"
        element = { < SingIN / > }
        />  <
        Route path = "auth"
        element = { < Authentication / > }
        /> 

        <
        /Route>




        <
        /Routes>

    );
};

export default App;