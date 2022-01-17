import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  areaDataN: {
    width: 350,
    height: 45,
    marginRight: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    backgroundColor: theme.colors.secondaryMenos1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    marginBottom: 25,
},
  date: {
    width: '100%',
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 6,
    marginBottom: 11,
}
});