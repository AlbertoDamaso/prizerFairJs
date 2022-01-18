import React, { useContext, useState } from 'react';
import {
  View, Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import addCamera from '../../assets/addCamera.png';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { InputDate } from '../../components/InputDate';
import { MaskInput } from '../../components/MaskInput';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { AuthContext } from '../../contexts/auth';
import { styles } from './styles';

export function SignUp(){
  const navigation = useNavigation();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [zap, setZap] = useState('')
  const [dateN, setDateN] = useState(new Date())

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, name, zap, dateN);
  }

  function handleCamera(){
    navigation.navigate('AddCam');
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <Background>

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.imgBtn}
            onPress={handleCamera}
          >
          <Image
            source={addCamera}
            style={styles.image}
            resizeMode="stretch"
          />        
          </TouchableOpacity>
        </View>

        <View style={styles.areaInput}>
          <Input 
            placeholder="Nome"
            placeholderTextColor="#7D7D7D"
            returnKeyType="next"
            onSubmitEditing={ () => Keyboard.dismiss()}
            value={name}
            onChangeText={ (text) => setName(text)}
            
          />
          <Input 
            placeholder="E-mail"
            placeholderTextColor="#7D7D7D"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={ () => Keyboard.dismiss()}
            value={email}
            onChangeText={ (text) => setEmail(text)}
          />
          
          <InputDate
            date={dateN}
            display="default"
            mode="date"
            placeholder="Data de Nascimento"
            format="DD/MM/YYYY"
            minDate="01-01-1922"
            maxDate="01-01-2050"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => setDateN(date)}
          />
          <MaskInput 
            placeholder="WhatsApp"
            placeholderTextColor="#7D7D7D"
            returnKeyType="next"
            keyboardType="phone-pad"
            onSubmitEditing={ () => Keyboard.dismiss()}
            value={zap}
            onChangeText={ (text) => setZap(text)}
          />
          <Input 
            placeholder="Senha"
            placeholderTextColor="#7D7D7D"
            returnKeyType="next"
            onSubmitEditing={ () => Keyboard.dismiss()}
            value={password}
            onChangeText={ (text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <Button 
          onPress={handleSignUp}
          title={"Cadastrar"}
          activeOpacity={0.7}
        />
      </Background>
    </TouchableWithoutFeedback>
  );
}