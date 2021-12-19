import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
submitButton:{
    width: 32,
    height: 32,
    borderWidth:1,    
    marginTop: 60,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 25,
    borderColor: theme.colors.light,
    backgroundColor: theme.colors.light
  }
});