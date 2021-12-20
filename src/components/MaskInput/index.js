import { MaskedTextInput } from "react-native-mask-text";
import React from 'react';

import {
  View
} from 'react-native';

import { styles } from './styles';

export function MaskInput({...rest}) {
  return (
    <MaskedTextInput
    mask="99/99/9999"
    {...rest}
    style={styles.input}
    />
  );
}