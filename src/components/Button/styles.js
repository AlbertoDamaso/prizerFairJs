import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
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