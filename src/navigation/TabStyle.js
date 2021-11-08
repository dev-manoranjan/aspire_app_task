import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  textStyle: {fontSize: 9, color: '#DDDDDD'},
  textStyleForDebit: {fontSize: 9, color: '#01D167'},
});
