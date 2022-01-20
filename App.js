import React from "react";
import AppLoading from 'expo-app-loading';
import { StatusBar } from "react-native"
import { useFonts } from 'expo-font';
import { Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Background } from './src/components/Background';
import { Routes } from "./src/routes";
import AuthProvider from "./src/contexts/auth";
import { NavigationContainer } from '@react-navigation/native';


console.disableYellowBox=true;

export default function App(){
  const [fontsLoaded, error] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Background>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
          />
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
    </Background>
  )
}