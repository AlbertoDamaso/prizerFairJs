import { StyleSheet } from 'react-native';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    alignSelf:'center',
    paddingHorizontal: 15,
    width: 350,
    height: 45,
    backgroundColor: theme.colors.secondaryMenos1,
    color: theme.colors.dark,
    borderRadius: 5,
    fontFamily: theme.fonts.title500,
    fontSize: 19,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    marginBottom: 25,
  }
});