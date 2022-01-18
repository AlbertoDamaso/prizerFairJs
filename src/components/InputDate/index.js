import React from 'react';
import {
  View
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

console.disableYellowBox = true;

export function InputDate({...rest}) {
  return (
    <View style={styles.areaDataN}>
      <DatePicker
        style={styles.date}
        customStyles={{
          dateIcon: {
            marginLeft: 0
          },
          dateInput: {
            alignItems: 'flex-start',
            borderWidth: 0
          },
          placeholderText: {
            color: '#7D7D7D',
            fontSize: 19,
            fontFamily: theme.fonts.title500,

          }
        }}
        {...rest}
      />
    </View>
  );
}