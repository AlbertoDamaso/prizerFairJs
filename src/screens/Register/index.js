import React, { useState } from 'react';
import {
  View, Image, Keyboard, Alert, TouchableOpacity
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import addCamera from '../../assets/addCamera.png';
import { useNavigation } from '@react-navigation/native';
// import { MaskInput } from '../../components/MaskInput';
import { Background } from '../../components/Background';
import { InputDate } from '../../components/InputDate';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { styles } from './styles';
import firebase from '../../services/firebaseConnection';

export function Register(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dateN, setDateN] = useState(new Date())
  const [password, setPassword] = useState('')
  const [confirPass, setConfirPass] = useState('')
  const navigation = useNavigation();

  // function handleHome(){
  //   navigation.navigate('Home');
  // }

  function handleSubmit(){
    Keyboard.dismiss();
    if(name === null){
      alert('Nome é obrigatorio!')
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Nome: ${name} \nEmail: ${email} \nData Nascimento: ${dateN}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }
  
  async function handleAdd(){
    // let key = await firebase.database().ref('pessoas').push().key; Modificar Aqui para registrar!!!
    await firebase.database().ref('pessoas').push().set({
      nome: name,
      email: email,
      dateN: dateN,
      senha: password,
      csenha: confirPass,
    })
    Keyboard.dismiss();
    setName('');
    setEmail('');
    setDateN('');
    setPassword('');
    setConfirPass('');
    navigation.navigate('Home')
  }

  function handleCamera(){
    navigation.navigate('AddCam')
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
            onSubmitEditing={ () => Keyboard.dismiss() }
            value={name}
            onChangeText={ (text) => setName(text)}
          />
          <Input 
            placeholder="E-mail"
            placeholderTextColor="#7D7D7D"
            keyboardType="email-address"
            returnKeyType="next"
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
          {/* <MaskInput 
            placeholder="Data de Nascimento"
            placeholderTextColor="#7D7D7D"
            keyboardType="numeric"
            returnKeyType="next"
            value={dateN}
            onChangeText={ (text) => setDateN(text)}
          /> */}
          <Input 
            placeholder="Senha"
            placeholderTextColor="#7D7D7D"
            returnKeyType="next"
            value={password}
            onChangeText={ (text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Input 
            placeholder="Confirmar Senha"
            placeholderTextColor="#7D7D7D"
            returnKeyType="next"
            value={confirPass}
            onChangeText={ (text) => setConfirPass(text)}
            secureTextEntry={true}
          />
        </View>
        <Button 
          title={"Cadastrar"}
          activeOpacity={0.7}
          onPress={handleSubmit}
        />
      </Background>
    </TouchableWithoutFeedback>
  );
}