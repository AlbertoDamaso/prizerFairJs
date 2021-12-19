import React from 'react';
import { Text, 
    TouchableOpacity } from 'react-native';
import { styles } from './styles';



export function Button({ title, ...rest }){
    return(
        <TouchableOpacity 
            style={styles.submitButton}
            {...rest}
        >
            <Text style={styles.textButton}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}