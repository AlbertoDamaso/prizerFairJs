import { Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginTop: 115,
    marginBottom: 45
  },
  comImage:{
    width: 100,
    height: 110,
    borderRadius: 90,
  },
  semImage: {
    width: 115,
    height: 115,
  },
  areaInput: {
    width: '100%',
  },
  submitButton:{
    alignSelf:'center',
    width: 165,
    height: 45,
    borderWidth:1,    
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary
  },
  textButton: {
    flex: 1,
    fontSize: 19,
    textAlign: "center",
    color: theme.colors.secondary100,
    fontFamily: theme.fonts.title500
  }
});