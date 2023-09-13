import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import getStyleSheet from './styles';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const styles = getStyleSheet(theme);

  const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button
          title={backgroundColor}
          onPress={() => setTheme(() => theme === 'light' ? 'dark' : 'light')}
        />
      </View>
    </View>
  );
};

export default App;
