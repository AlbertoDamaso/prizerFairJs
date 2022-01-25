import React, { useContext, useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';
import {
  View,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import { Background } from '../../components/Background';
import { BtnGoBack } from '../../components/BtnGoBack';
import { Button } from '../../components/Button';
import { Item } from '../../components/Item'
import { styles } from './styles';
import { AuthContext } from '../../contexts/auth';

export function Home(){
  const { signOut } = useContext(AuthContext);
  const [user, setUser] = useState([]);

  useEffect(() =>{
    async function loadList(){
      await firebase.database().ref('users')
      .orderByChild('date').on('value', (snapshot)=>{
        setUser([]);

        snapshot.forEach((childItem) =>{
          let list ={
            key: childItem.key,
            name: childItem.val().name,
            email: childItem.val().email,
            dateN: childItem.val().dateN,
            image: childItem.val().image
          };

          setUser(oldArray => [...oldArray, list]. reverse());
        })
      })
      }
      loadList();
  },[]);

  function handleDelete(data){
    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir ${data.user}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
      },
      {
        text: 'Continuar',
        onPress: () => handleDeleteSuccess(data)
      }
    ]
    )
  }

  async function handleDeleteSuccess(data){
    await firebase.auth().ref('users')
    .child(uid).child(data.key).remove()
  }

  return (
    <Background>
      <View style={styles.header}>
        <BtnGoBack onPress={()=> signOut()}/>
      </View>
      <View style={styles.areaTitle}>
        <Text style={styles.title}>
          Pessoas adicionadas para ganhar os prêmios!!!
        </Text>
      </View>

      <FlatList
        data={user}
        keyExtractor={ item => item.key}
        renderItem={({ item }) => (
           <Item data={item} deleteItem={handleDelete}/> 
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      /> 
      <View style={styles.areaBtn}>
        <Button 
          title={"Adicionar"}
          activeOpacity={0.7}
          onPress={ ()=> signOut()}
        />
      </View>        
    </Background>
  );
}