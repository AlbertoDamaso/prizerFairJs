import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

console.disableYellowBox = true;

export function AddCam({navigation}) {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  // const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === 'granted');
    })();    

  }, []);

  if (hasPermission === null) {
    return <View/>;
  }
  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  async function takePicture(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
    }
  }

  async function savePicture(){
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
    .then(() => {
      alert("Salva com sucesso!");
      setOpen(false);
    })
    .catch (error =>{
      console.log('err', error)
    })
  }

  async function openAlbum(){
    const photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });
    setCapturedPhoto(photo.uri);
    setOpen(true);    

    if(!photo.cancelled){
      setImage(photo.uri);
    }
  }

  function handleGoBack(){
    navigation.navigate('SignUp')
  }


  return (
    <View style={styles.container}>
      <View style={styles.viewCam}>
        <Camera 
          style={styles.camera}
          type={type}
          ref={camRef}
        />
      </View>        

      <View style={styles.viewBtn}>
        
        <TouchableOpacity 
          style={styles.buttonFlip} 
          onPress={handleGoBack}
        >
          <FontAwesome name="arrow-left" size={23} color="#000" ></FontAwesome>
        </TouchableOpacity>  

        <TouchableOpacity 
          style={styles.buttonAlbum} 
          onPress={openAlbum}
        >
          <FontAwesome name="photo" size={23} color="#000" ></FontAwesome>
        </TouchableOpacity> 

        <TouchableOpacity 
          style={styles.buttonPhoto} 
          onPress={takePicture}
        >
          <FontAwesome name="camera" size={23} color="#fff" ></FontAwesome>
        </TouchableOpacity>   

        <TouchableOpacity
          style={styles.buttonFlip}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <FontAwesome name="refresh" size={25} color="#000"/>
        </TouchableOpacity>
      </View>

      { capturedPhoto && 
        <Modal
          animationType='slide'
          transparent={false}
          visible={open}
        >
          <View style={styles.viewModal}>

            <View style={styles.viewModalBtn}>
              <TouchableOpacity 
                style={styles.buttonModal}
                onPress={ () => setOpen(false)}
              >
                <FontAwesome name="window-close" size={50} color="#ff0000"/>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.buttonModal}
                onPress={ savePicture }
              >
                <FontAwesome name="upload" size={50} color="#121212"/>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.buttonModal}
                onPress={ () => navigation.navigate('SignUp', {picture: capturedPhoto}) }
              >
                <FontAwesome name="send" size={50} color="#121212"/>
              </TouchableOpacity>              
            </View>

            <Image
            style={styles.image}
            source={{ uri: capturedPhoto }}
            />
          </View>
        </Modal>
      }
    </View>
  );
}