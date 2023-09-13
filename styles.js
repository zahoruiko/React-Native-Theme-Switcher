import { StyleSheet } from 'react-native';

export const COLORS = {
  dark: 'black',
  light: 'white'
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};

const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: '90%',
  width: '90%',
};

const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: COLORS.light
  },
  box: {
    ...baseBoxStyles,
    borderColor: COLORS.dark
  }
});

const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: COLORS.dark
  },
  box: {
    ...baseBoxStyles,
    borderColor: COLORS.light
  }
});

export default function getStyleSheet(theme) {
  return theme === 'dark' ? darkStyleSheet : lightStyleSheet;
};
