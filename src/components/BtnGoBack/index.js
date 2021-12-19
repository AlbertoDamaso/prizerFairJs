import React from 'react';
import { 
    TouchableOpacity,
 } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';  
import { theme } from '../../global/styles/theme';


export function BtnGoBack({ ...rest }){
    return(
        <TouchableOpacity 
            style={styles.submitButton}
            {...rest}
        >
            <MaterialIcons
                name="keyboard-arrow-left" 
                size={32} 
                color={theme.colors.primary}
            />
        </TouchableOpacity>
    )
}