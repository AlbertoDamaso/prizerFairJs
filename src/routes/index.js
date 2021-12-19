import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from "./app.routes";

export function Routes(){
    return(
        <NavigationContainer>
            {/* { user.id ? <AppRoutes/> : <SignIn/>} */}
            <AppRoutes/>
        </NavigationContainer>
    )
}