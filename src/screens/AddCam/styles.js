import { Montserrat_100Thin_Italic, Montserrat_300Light_Italic } from '@expo-google-fonts/montserrat';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    width: '100%',
    height: 26,
    marginTop: 670,
    marginLeft: -20
  },
  buttonFlip: {
    width: 100,
    height: 35,
    alignSelf:'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#fff' 
  },
  text: {

  },
  buttonPhoto: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
    margin: 20,
    borderRadius: 10,
    height: 50
  },
  viewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  buttonModal: {
    margin: 10
  },
  image:{
    width: '100%',
    height: 300,
    borderRadius: 20
  }
});