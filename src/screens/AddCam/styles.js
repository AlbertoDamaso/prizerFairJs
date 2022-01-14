import { Montserrat_100Thin_Italic, Montserrat_300Light_Italic } from '@expo-google-fonts/montserrat';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewCam:{
    flex: 1,
    width: '98%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  camera: {
    width: '95%',
    height: 500,
    alignSelf: 'center',
  },
  viewBtn: {
    width: '100%',
    height: 50,
    marginBottom: 60,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonFlip: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    backgroundColor: '#fff' 
  },
  buttonPhoto: {
    width: '50%',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
    borderRadius: 10,
    height: 50
  },
  viewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  viewModalBtn: {
    flexDirection: 'row',
  },
  buttonModal: {
    margin: 10
  },
  image:{
    width: '100%',
    height: 450,
    borderRadius: 20
  }
});