import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../screens/SignUp';
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
                name="SignUp"
                component={SignUp}
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