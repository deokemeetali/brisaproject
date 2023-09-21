import React from "react";
import {Navigate,Route} from 'react-router-dom';
function PrivateRoute({element,isAuthentication}){
    if(!isAuthentication){
        return <Navigate to='/' />;
    }
    return <Route element={element}/>
};
export default PrivateRoute;