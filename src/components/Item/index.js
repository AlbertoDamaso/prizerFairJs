import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { styles } from './styles';


export function Item({ data }){
  return (
    <View style={styles.container}>
      <View style={styles.areaImg}>
        <Image
          source={{uri:data.image}}
          style={styles.image}
        />  
        <Text>
          1.{data.image}
        </Text>
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