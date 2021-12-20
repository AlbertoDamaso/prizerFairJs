import React from "react";
import { TextInput } from "react-native";
import  { styles } from './styles';

export function Input({...rest}){

    return(
        <TextInput
            placeholderTextColor="#CACDCD"
            style={styles.container}
            {...rest}
        />
    )
}