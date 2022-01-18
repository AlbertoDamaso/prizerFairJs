import React, {useContext} from 'react';
import { Text, 
    TouchableOpacity,
    ActivityIndicator
 } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { styles } from './styles';


export function Button({ title, ...rest }){
    const { loadingAuth } = useContext(AuthContext);
    return(
        <TouchableOpacity 
            style={styles.submitButton}
            {...rest}
        >
            {
                loadingAuth ? (
                    <ActivityIndicator size={20} color="#141414"/>
                    ) : (
                    <Text style={styles.textButton}>
                        { title }
                    </Text>
                )
            }        
        </TouchableOpacity>
    )
}