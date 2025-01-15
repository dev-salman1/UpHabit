import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BootSplash from 'react-native-bootsplash';
import './global.css';

const App = () => {
  React.useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
