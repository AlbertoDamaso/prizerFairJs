import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    paddingHorizontal: 20,
    height: 110,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary100,
    borderRadius: 15,
    marginBottom: 20,
  },
  areaImg: {
    alignSelf: 'flex-start',
    width: 73,
    height: 73,
    marginTop: 20,
    marginBottom:20
  },
  image: {
    width:  73,
    height: 73,
    borderRadius: 45
  },
  areaTxt: {
    marginTop: 20,
    paddingHorizontal:20
  },
  name: {
    fontFamily: theme.fonts.title700,
    fontSize: 16,
    color: theme.colors.primary,
    marginBottom: 5
  },
  text: {
    fontFamily: theme.fonts.title500,
    fontSize: 14,
    color: theme.colors.light,
    marginBottom: 5
  }
});