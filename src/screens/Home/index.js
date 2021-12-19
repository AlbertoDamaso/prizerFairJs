import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
// import photoProfile from '../../assets/PhotoPerfil.png'
// import photoProfile1 from '../../assets/PhotoPerfil-1.png'
// import photoProfile2 from '../../assets/PhotoPerfil-2.png'
// import photoProfile3 from '../../assets/PhotoPerfil-3.png'
// import photoProfile4 from '../../assets/PhotoPerfil-4.png'
// import photoProfile5 from '../../assets/PhotoPerfil-5.png'
// import photoProfile6 from '../../assets/PhotoPerfil-6.png'
// import photoProfile7 from '../../assets/PhotoPerfil-7.png'
// import photoProfile8 from '../../assets/PhotoPerfil-8.png'
import { Background } from '../../components/Background';
import { BtnGoBack } from '../../components/BtnGoBack';
import { Button } from '../../components/Button';
import { Item } from '../../components/Item'
import { styles } from './styles';

export function Home(){
  const navigation = useNavigation();
  // const [itens, setItens] = useState([
  //   {key:'1', name: 'Alberto Matheus', email: 'alberto.matheus@hotmail.com', dateN: '16/11/1995', url:photoProfile8},
  //   {key:'2', name: 'Matheus Dias', email: 'matheusdias@hotmail.com', dateN: '20/11/1995', url:photoProfile7},
  //   {key:'3', name: 'Roberto Torres', email: 'robertotorr@gmail.com', dateN: '12/02/2000', url:photoProfile6},
  //   {key:'4', name: 'Fausto Silva', email: 'fautaodopokemon@hotmail.com', dateN: '20/10/1980', url:photoProfile5},
  //   {key:'5', name: 'Ana Carolina', email: 'anacarolinaa@hotmail.com', dateN: '19/09/2000', url:photoProfile4},
  //   {key:'6', name: 'Jorginho Silva', email: 'jorginhos@gmail.com', dateN: '22/12/2001', url:photoProfile3},
  //   {key:'7', name: 'Julia Eguchin', email: 'julia.eguchinn@outlook.com', dateN: '12/12/2012', url:photoProfile2},
  //   {key:'8', name: 'Victoria Pato', email: 'vic@oul.com', dateN: '05/05/2005', url:photoProfile1},
  //   {key:'9', name: 'João do Trem', email: 'joaotremdoido@gmail.com', dateN: '16/02/1986', url:photoProfile},
  // ])
  const [itens, setItens] = useState([
    {key:'1', name: 'Alberto Matheus', email: 'alberto.matheus@hotmail.com', dateN: '16/11/1995'},
    {key:'2', name: 'Matheus Dias', email: 'matheusdias@hotmail.com', dateN: '20/11/1995'}, 
    {key:'3', name: 'Roberto Torres', email: 'robertotorr@gmail.com', dateN: '12/02/2000'}, 
    {key:'4', name: 'Fausto Silva', email: 'fautaodopokemon@hotmail.com', dateN: '20/10/1980'}, 
    {key:'5', name: 'Ana Carolina', email: 'anacarolinaa@hotmail.com', dateN: '19/09/2000'}, 
    {key:'6', name: 'Jorginho Silva', email: 'jorginhos@gmail.com', dateN: '22/12/2001'}, 
    {key:'7', name: 'Julia Eguchin', email: 'julia.eguchinn@outlook.com', dateN: '12/12/2012'}, 
    {key:'8', name: 'Victoria Pato', email: 'vic@oul.com', dateN: '05/05/2005'}, 
    {key:'9', name: 'João do Trem', email: 'joaotremdoido@gmail.com', dateN: '16/02/1986'}
  ])

  function handleVoltar(){
    navigation.goBack();
  }
  return (
    <Background>
      <View style={styles.header}>
        <BtnGoBack onPress={handleVoltar}/>
      </View>
      <View style={styles.areaTitle}>
        <Text style={styles.title}>
          Pessoas adicionadas para ganhar os prêmios!!!
        </Text>
      </View>

      <FlatList
        data={itens}
        keyExtractor={ item => item.key}
        renderItem={({ item }) => (
           <Item data={item}/> 
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      /> 
      <View style={styles.areaBtn}>
        <Button 
          title={"Adicionar"}
          activeOpacity={0.7}
          onPress={handleVoltar}
        />
      </View>        
    </Background>
  );
}