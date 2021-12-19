import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import photoperfil from '../../assets/PhotoPerfil-8.png'
import { styles } from './styles';


export function Item({ data }){
  return (
    <View style={styles.container}>
      <View style={styles.areaImg}>
        <Image
          source={photoperfil}
          style={styles.image}
        />  
      </View>
      <View style={styles.areaTxt}>
        <Text style={styles.name}>
          {data.name}
        </Text>
        <Text style={styles.text}>
          {data.email}
        </Text>
        <Text style={styles.text}> 
          {data.dateN} 
        </Text>
      </View>
    </View>
  );
}