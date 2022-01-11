import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';


export function AddCam() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
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
      console.log(data.uri)
    }
  }

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera}
        type={type}
        ref={camRef}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Girar </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity 
        style={styles.buttonPhoto} 
        onPress={takePicture}
      >
        <FontAwesome name="camera" size={23} color="#fff" ></FontAwesome>
      </TouchableOpacity>

      { capturedPhoto && 
        <Modal
          animationType='slide'
          transparent={false}
          visible={open}
        >
          <View style={styles.viewModal}>

            <TouchableOpacity 
            style={styles.buttonModal}
            onPress={ () => setOpen(false)}
            >
              <FontAwesome name="window-close" size={50} color="#ff0000"/>
            </TouchableOpacity>

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