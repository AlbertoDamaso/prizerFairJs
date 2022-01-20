import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const navigation = useNavigation();
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(()=>{
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user')

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }            
            setLoading(false)
        }
        loadStorage()
    }, [])

    //Cadastrar pessoa
    async function signUp(email, password, name, zap, dateN){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value)=>{
            alert('Pessoa adicionada: '+ value.user.email);//DEBUG
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                name: name,
                email: email,
                dateN: dateN 
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    name: name,
                    zap: zap,
                    email: value.user.email,
                    dateN: dateN
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch( (error) => {
            if(error.code === 'auth/weak-password'){
              alert('Sua senha deve ter pelo menos 6 caracteres');
              setLoadingAuth(false);
              return;
            }
            if(error.code === 'auth/invalid-email'){
              alert('Email invalido');
              setLoadingAuth(false);
              return;
            }else{
              alert('Ops algo deu errado!');
              setLoadingAuth(false);
              return;
            }      
        })
    }
    
    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))        
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
            .then( ()=> {
                setUser(null);
                navigation.navigate('SignUp');
            })
    }
    
    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;