import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  React.useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
