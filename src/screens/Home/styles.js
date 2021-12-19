import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 115,
    backgroundColor: theme.colors.secondary100,
    borderBottomColor: theme.colors.secondary100,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius:15
  },
  areaTitle: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    color: theme.colors.light,
    fontFamily: theme.fonts.title700
  },
  matches: {
    margin: 20,
    marginBottom: 20
  },
  areaBtn: {
    width: '100%',
    height: 75,
  }
});