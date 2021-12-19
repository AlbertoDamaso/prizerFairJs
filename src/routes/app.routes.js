import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from '../screens/Register';
import { Home } from '../screens/Home';
import { AddCam } from '../screens/AddCam';

const RootStack = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <RootStack.Navigator 
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor: 'transparent'}
            }}
        >
            <RootStack.Screen
                name="Register"
                component={Register}
            />              
            <RootStack.Screen
                name="AddCam"
                component={AddCam}
            />
            <RootStack.Screen
                name="Home"
                component={Home}
            />                
        </RootStack.Navigator>
    )
}